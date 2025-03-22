import { type NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { storeORCIDAccessToken as storeORCIDAccessTokenInSession } from "../lib/tokenStore"
import { oauth_orcid } from "../lib/orcidOauth"

/**
 * Endpoint that handles the Oauth redirect from ORCID that contains the authorization code.
 * @param request 
 */
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const code = searchParams.get('code') as any  // gets the authorization code sent from ORCID    
    const accessToken = await exchangeCodeForAccessToken(code) as any

    const sessionId = await storeORCIDAccessTokenInSession(accessToken)
    const cookieStore = await cookies()
    const expires = new Date(Date.now() + 60 * 60 * 1000) // in one hour

    cookieStore.set({
        name: 'orcid',
        value: sessionId,
        httpOnly: true,
        expires,
        secure: false,   // secure only works with https, so change this later
        sameSite: 'strict',  // only allow cookie use for requests to same origin
        path: '/',  // any path under the root submits the cookie
    })

    redirect('/upload')
}

async function exchangeCodeForAccessToken(code: string) {

    // setup the post request body
    const params = {
        client_id: oauth_orcid.client_id,
        client_secret: oauth_orcid.client_secret,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: oauth_orcid.redirect_uri,
    };

    // Exchange code with a token
    const response = await fetch(oauth_orcid.codeExchangeEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(params),
    });

    /*  
     data that should be returned:
    {"access_token":"f5af9f51-07e6-4332-8f1a-c0c11c1e3728","token_type":"bearer",
       "refresh_token":"f725f747-3a65-49f6-a231-3e8944ce464d","expires_in":631138518,
       "scope":"/read-limited","name":"Sofia Garcia","orcid":"0000-0001-2345-6789"}
      */
    const data = await response.json();
    // we store all the data so we can use not just the access token but also the name and orcid id in the UI
    // i.e, 'Hi Sofia Garcia! Let's get your credential added'
    return data;


}


