'use server';

import { z } from 'zod';
import { verifyCredential } from '@digitalcredentials/verifier-core';
import { knownDIDRegistries } from '@/data/knownRegistries';
import { cookies } from 'next/headers'
import { getORCIDAccessToken } from './tokenStore';
import { educationPostTemplate } from '@/data/educationPostTemplate';
const FormSchema = z.object({
  vcText: z.string().trim()
    .min(1, { message: "You must provide a Verifiable Credential." })
});

export type State = {
  errors?: {
    vcText?: string[];
  };
  message?: string | null;
  success?: boolean | null;
  data?: {
    vcText?: string;
  };
};


export async function submitVC(prevState: State, formData: FormData) : Promise<State> {

  const vcText = formData.get('vcText')
  const data = {vcText}
  const validatedFields = FormSchema.safeParse(data);

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields - complete them so we can get your credential added!"
    };
  }

  try {
    // validate VC
    await validateVC(validatedFields.data.vcText)
   
  } catch (error) {
    console.log(error)
    return {
      message: 'Error: Failed to validate.',
      success: false,
      ...data
    };
  }
  const orcidFriendlyData = transformToORCIDFormat(validatedFields.data.vcText);
  const success = await postDataToORCID(orcidFriendlyData)  

   // will need to pull success (of some sort) out of orcidSubmissionResult
  return {...data, success};
}

function transformToORCIDFormat(vc:any) : any{
  // TODO populate template from VC
  // TODO throw error if not correct data
  return educationPostTemplate;
}


async function postDataToORCID(orcidFriendlyData:any) {

    const cookieStore = await cookies()
    const sessionId : any = cookieStore.get('orcid')
    const accessTokenRecord = await getORCIDAccessToken(sessionId)
 
  const updateResponse = await fetch(
    `https://api.sandbox.orcid.org/v3.0/${accessTokenRecord.orcid}/education`,  // get right endpoint from: https://github.com/ORCID/orcid-model/blob/master/src/main/resources/record_3.0/README.md#add-record-items
    {
      method: 'POST',  
      headers: {
        "Content-Type": 'application/vnd.orcid+xml',
        "Authorization": `Bearer ${accessTokenRecord.access_token}`,
      },
      body: orcidFriendlyData
    },
  );

  return updateResponse.ok
}

async function validateVC(vcText:string) {
    const credential = JSON.parse(vcText)
    const result = await verifyCredential({ credential, knownDIDRegistries, reloadIssuerRegistry: true })
    // TODO throw error if validation fails - but return whole result object so we can communicate problem to end user
}




