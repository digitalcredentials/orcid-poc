'use server';

import Keyv from 'keyv'
import crypto from 'crypto'

const keyv = new Keyv()

export const storeORCIDAccessToken = (token:string) => {
    const sessionId = crypto.randomUUID()
    keyv.set(sessionId, token)
    return sessionId;
}

export const getORCIDAccessToken = (sessionId:string) => {   
    return keyv.get(sessionId)
}