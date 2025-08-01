'use server';

import { z } from 'zod';
import { verifyCredential } from '@digitalcredentials/verifier-core';
import { knownDIDRegistries } from '@/data/knownRegistries';
import { populateORCIDTemplateFromVC } from '@/data/educationPostTemplate';
import { getStoredAccessTokenRecord } from './accessTokens';
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

  let credential
  try {
    // validate VC
   credential = await validateVC(validatedFields.data.vcText)
   
  } catch (error) {
    console.log(error)
    return {
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      message: (error as any).toString(),
      success: false,
      errors: {vcText: ["The credential couldn't be verified. Please try again."]},
      ...data
    };
  }
  const postableORCIDData = populateORCIDTemplateFromVC(credential);
  const success = await postDataToORCID(postableORCIDData)  

   // will need to pull success (of some sort) out of orcidSubmissionResult
  return {...data, success};
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
async function postDataToORCID(postableORCIDData:any) {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const accessTokenRecord : any = await getStoredAccessTokenRecord();
  await fetch(
    `https://api.sandbox.orcid.org/v3.0/${accessTokenRecord.orcid}/education`,  // get right endpoint from: https://github.com/ORCID/orcid-model/blob/master/src/main/resources/record_3.0/README.md#add-record-items
    {
      method: 'POST',  
      headers: {
        "Content-Type": 'application/vnd.orcid+json',
        "Authorization": `Bearer ${accessTokenRecord.access_token}`,
      },
      body: postableORCIDData
    },
  ); 
  
  return  true //updateResponse.ok
}

async function validateVC(vcText:string) {
    const credential = JSON.parse(vcText)
    const verificationResult = await verifyCredential({ credential, knownDIDRegistries, reloadIssuerRegistry: true })
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    if (! verificationResult.log?.every((result:any)=>{ return result.valid})) {
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      const errorMessage = verificationResult.errors ? verificationResult.errors.map((error:any)=>error.message).join('---') : "The credential couldn't be verified."
      throw new Error(errorMessage)
    }
    return credential // TODO throw error if validation fails - but return whole result object so we can communicate problem to end user
}




