import * as Random from 'expo-random'
import wordlist from './wordlist_eng'

export const createMnemonic = async (): Promise<string[]> => {
    try {
        const randoms: number[] = []
        const quantity = 24
        while (randoms.length < quantity) {
            let randomBytes = await Random.getRandomBytesAsync(100)
            let number = (randomBytes[0] * 16 + randomBytes[1]) % 2048
            if (!randoms.includes(number)) randoms.push(number)
        }
        return randoms.map(random => wordlist[random])
    } catch (error) {
        console.log(error);
        return Promise.reject({ code: 9000 })
    }
}