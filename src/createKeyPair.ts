import { mnemonicToSeed } from "bip39";

export const mnemonicToSeedHex = async (array: string[]) => {
    try {
        const seed: Buffer = await mnemonicToSeed(array.join(' '))
        return seed.toString('hex')
    } catch (e) {
        throw e
    }
}


// const seedHexToKeyPair = async ({ seedHex, coin, index }) => {
//     const coin_id = coinlist[coin].id
//     const network = coinlist[coin].network
//     const seedBuffer = Buffer.from(seedHex, 'hex')
//     const root = bip32.fromSeed(seedBuffer, network)
//     const account = root
//         .deriveHardened(44)
//         .deriveHardened(coin_id)
//         .deriveHardened(0)
//         .derive(0)
//         .derive(index)


//     let address, publickey, privkey
//     privkey = account.toWIF()
//     publickey = account.publicKey.toString('hex')
//     address = payments.p2pkh({ pubkey: account.publicKey, network }).address

//     switch (coin) {
//         case 'btc':
//         case 'ltc':
//             break
//         case 'bch':
//             const legacy = address
//             const cashadd = bchaddr.toCashAddress(legacy)
//             address = { legacy, cashadd }
//             break
//         case 'eth':
//         case 'etc':
//             privkey = account.privateKey.toString('hex')
//             address = '0x' + privateToAddress(account.privateKey).toString('hex')
//             publickey = '0x' + publickey
//             break
//         case 'trx':
//             privkey = account.privateKey.toString('hex')
//             address = tronweb.address.fromPrivateKey(privkey)
//             publickey = address
//             break
//         default:
//             break
//     }

//     return Promise.resolve({ address, publickey, privkey })
// }

// const createKeyPair = async ({ seedHex, coin, index }) => {
//     try {
//         switch (coin.toLowerCase()) {
//             case 'btc':
//             case 'bch':
//             case 'ltc':
//             case 'eth':
//             case 'etc':
//             case 'trx':
//                 return seedHexToKeyPair({ seedHex, coin, index })
//             default:
//                 return Promise.reject(new Error('9004'))
//         }
//     } catch (error) {
//         console.log(error);
//         return Promise.reject(new Error('9001'))
//     }
// }

// export { mnemonicToSeedHex, createKeyPair }  