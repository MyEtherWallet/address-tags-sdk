"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toChecksumAddress = void 0;
const keccak = require("keccak");
const toChecksumAddress = (address) => {
    const lowerCaseAddress = address.toLowerCase().slice(2);
    const keccak256 = keccak("keccak256");
    const hash = keccak256.update(lowerCaseAddress).digest("hex");
    let checksumAddress = "0x";
    for (let i = 0; i < lowerCaseAddress.length; i++) {
        if (parseInt(hash[i], 16) >= 8) {
            checksumAddress += lowerCaseAddress[i].toUpperCase();
        }
        else {
            checksumAddress += lowerCaseAddress[i];
        }
    }
    return checksumAddress;
};
exports.toChecksumAddress = toChecksumAddress;
