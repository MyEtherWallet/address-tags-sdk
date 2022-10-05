export interface IAddressInformation {
    publicNameTag: string;
    contractAddress: string;
    uiWebsiteLink: string;
    publicNote: string;
}
export declare const getInfoFromIPFS: (ipfsPath: string, ipfsGateway: string) => Promise<IAddressInformation>;
