"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfoFromIPFS = void 0;
const cross_fetch_1 = require("cross-fetch");
const getInfoFromIPFS = async (ipfsPath, ipfsGateway) => {
    const response = await (0, cross_fetch_1.default)(ipfsGateway + ipfsPath);
    if (!response.ok)
        throw new Error(response.statusText);
    const json = await response.json();
    return {
        publicNameTag: json.values["Public Name Tag"],
        contractAddress: json.values["Contract Address"],
        uiWebsiteLink: json.values["UI/Website Link"],
        publicNote: json.values["Public Note"],
    };
};
exports.getInfoFromIPFS = getInfoFromIPFS;
