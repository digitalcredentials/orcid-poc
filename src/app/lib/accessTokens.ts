'use server';

import { cookies } from 'next/headers'
import { getORCIDAccessToken } from './tokenStore';

export async function getStoredAccessTokenRecord() {
    const cookieStore = await cookies()
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const sessionCookie : any = cookieStore.get('orcid')
    if (!sessionCookie) return null
    const sessionId = sessionCookie.value
    const accessTokenRecord = await getORCIDAccessToken(sessionId)
    return accessTokenRecord
}

export async function verifyAccessToken() {
    const accessTokenRecord = await getStoredAccessTokenRecord()
    return accessTokenRecord ? true : false
}
    
    
    