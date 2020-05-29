"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMnemonic = void 0;
const Mnemonic = require("bitcore-mnemonic");
exports.createMnemonic = () => {
    const code = new Mnemonic(256, Mnemonic.Words.ENGLISH);
    // console.log({code: code.toString().split(' ').length, hex: code.toSeed().toString('hex')});   
    return code.toString().split(' ');
};
// createMnemonic() 
