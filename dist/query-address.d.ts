import { IAddressInformation } from "./get-info-from-ipfs";
export declare const getAddressInfo: (address: string, ipfsGateway: string) => Promise<IAddressInformation | undefined>;
