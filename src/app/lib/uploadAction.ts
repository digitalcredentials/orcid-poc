'use server';

import { z } from 'zod';
import { verifyCredential } from '@digitalcredentials/verifier-core';
import { knownDIDRegistries } from '@/data/knownRegistries';
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
      message: "Missing Fields - complete them so we can get you your credential!"
    };
  }

  try {
    // validate VC
    await validateVC(validatedFields.data.vcText)
    // and here is where we'll send it off to ORCID
   
  } catch (error) {
    console.log(error)
    return {
      message: 'Error: Failed to validate.',
      success: false,
      ...data
    };
  }
  // const orcidSubmission = getORCIDPayload(validatedFields.data.vcText)  
  // will need to temporarily store the payload for later submission to API after authenticating.
  // and somewhere around here we'll redirect to the ORCID auth page.
  return {...data, success: true};
}

async function validateVC(vcText:string) {
    const credential = JSON.parse(vcText)
    const result = await verifyCredential({ credential, knownDIDRegistries, reloadIssuerRegistry: true })
    console.log("the result")
    console.log(result)
}




