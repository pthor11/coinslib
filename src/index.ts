const Mnemonic = require("bitcore-mnemonic");

export const createMnemonic = () => {
    const code = new Mnemonic(256, Mnemonic.Words.ENGLISH)
    // console.log({code: code.toString().split(' ').length, hex: code.toSeed().toString('hex')});   
    return code.toString().split(' ')
}

// createMnemonic() 