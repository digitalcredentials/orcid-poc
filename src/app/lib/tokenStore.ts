'use server';

import Keyv from 'keyv'
import crypto from 'crypto'

const keyv = new Keyv<string>()

export const storeORCIDAccessToken = async (token:object) => {
    // note that the 'token' we store is actually the full
    // object returned from orcid, like this, from which we can also get the
    // user's  name and orcidID:

/*     {"access_token":"f5af9f51-07e6-4332-8f1a-c0c11c1e3728","token_type":"bearer",
        "refresh_token":"f725f747-3a65-49f6-a231-3e8944ce464d","expires_in":631138518,
        "scope":"/read-limited","name":"Sofia Garcia","orcid":"0000-0001-2345-6789"} */

    const sessionId = crypto.randomUUID()
    await keyv.set(sessionId, token)
    return sessionId
}

export const getORCIDAccessToken = async (sessionId:string) : Promise<any> => {   
    return await keyv.get(sessionId) as any
}

export const getAllTokens = async () => {
    let result = ''
    for await (const [key, value] of (keyv as any).iterator()) {
        console.log(key, value);
        result = `${result} ${key}:${value}`
      };  
      return result;
}

export const clearAllTokens = async () => {
    await keyv.clear()
}