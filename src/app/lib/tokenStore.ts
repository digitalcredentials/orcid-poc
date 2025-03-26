'use server';

import Keyv from 'keyv'
import crypto from 'crypto'

// set keyv instance as global to share across requests
const getKeyv = () => {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    if (! (global as any).keyv) {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (global as any).keyv = new Keyv<string>()
    }
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    return (global as any).keyv
}

export const storeORCIDAccessToken = async (token:object) => {
    // note that the 'token' we store is actually the full
    // object returned from orcid, like this, from which we can also get the
    // user's  name and orcidID:

/*     {"access_token":"f5af9f51-07e6-4332-8f1a-c0c11c1e3728","token_type":"bearer",
        "refresh_token":"f725f747-3a65-49f6-a231-3e8944ce464d","expires_in":631138518,
        "scope":"/read-limited","name":"Sofia Garcia","orcid":"0000-0001-2345-6789"} */

    const sessionId = crypto.randomUUID()
    await getKeyv().set(sessionId, token)
    return sessionId
}
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const getORCIDAccessToken = async (sessionId:string) : Promise<any> => {   
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    return await getKeyv().get(sessionId) as any
}

export const getAllTokens = async () => {
    let result = ''
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    for await (const [key, value] of (getKeyv() as any).iterator()) {
       // console.log(key, value);
        result = `${result} ${key}:${value}`
      };  
      return result;
}

/* export const clearAllTokens = async () => {
    await keyv.clear()
} */