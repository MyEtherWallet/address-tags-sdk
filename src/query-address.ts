import { toChecksumAddress } from "./checksum-address";
import { getIPFSPath } from "./get-ipfs-path";
import { getInfoFromIPFS, IAddressInformation } from "./get-info-from-ipfs";

const validateParams = (address: string, ipfsGateway: string) => {
  const isValidEthereumAddress = /^0x[a-fA-F0-9]{40}$/;
  const isValidGateway = /^(http(s)?:\/\/)[-a-zA-Z0-9@:%._+~#=]{2,256}/;
  if (!isValidEthereumAddress.test(address)) throw "Non valid ethereum address";
  if (!isValidGateway.test(ipfsGateway))
    throw "Non valid ipfs gateway, full URL is needed";
};

export const getAddressInfo = async (
  address: string,
  ipfsGateway: string
): Promise<IAddressInformation | undefined> => {
  try {
    validateParams(address, ipfsGateway);
    const checksumAddress = toChecksumAddress(address);
    const ipfsPath = await getIPFSPath(checksumAddress);
    return await getInfoFromIPFS(ipfsPath, ipfsGateway);
  } catch (error) {
    return undefined;
  }
};
