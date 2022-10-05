"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddressInfo = void 0;
const checksum_address_1 = require("./checksum-address");
const get_ipfs_path_1 = require("./get-ipfs-path");
const get_info_from_ipfs_1 = require("./get-info-from-ipfs");
const validateParams = (address, ipfsGateway) => {
    const isValidEthereumAddress = /^0x[a-fA-F0-9]{40}$/;
    const isValidGateway = /^(http(s)?:\/\/)[-a-zA-Z0-9@:%._+~#=]{2,256}/;
    if (!isValidEthereumAddress.test(address))
        throw "Non valid ethereum address";
    if (!isValidGateway.test(ipfsGateway))
        throw "Non valid ipfs gateway, full URL is needed";
};
const getAddressInfo = async (address, ipfsGateway) => {
    try {
        validateParams(address, ipfsGateway);
        const checksumAddress = (0, checksum_address_1.toChecksumAddress)(address);
        const ipfsPath = await (0, get_ipfs_path_1.getIPFSPath)(checksumAddress);
        return await (0, get_info_from_ipfs_1.getInfoFromIPFS)(ipfsPath, ipfsGateway);
    }
    catch (error) {
        return undefined;
    }
};
exports.getAddressInfo = getAddressInfo;
