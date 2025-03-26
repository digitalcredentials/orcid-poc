'use client';

import { Button } from '@/app/ui/button';
import { submitVC, State } from '@/app/lib/uploadAction';
import { useActionState, useState } from 'react';
import { handleFileUpload } from '@/app/lib/handleFileUpload';
import { useSearchParams } from 'next/navigation'
import { sampleBachelors } from '@/data/sampleDegreeVC';

export default function UploadForm() {


  const searchParams = useSearchParams()

  const name = searchParams.get('name')
  const orcid = searchParams.get('orcid')

  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(submitVC, initialState);
  const [success, setSuccess] = useState(false)
  const [credential, setCredential] = useState('');


  function handleFileDrop(e: React.DragEvent<HTMLInputElement>) {
    e.stopPropagation();
    e.preventDefault();
    handleFileUpload(e.dataTransfer.items[0].getAsFile(), setCredential)
  }

  function handleBrowse(e: React.ChangeEvent<HTMLInputElement>) {
    handleFileUpload(e.target.files !== null ? e.target.files[0] : null, setCredential);
  }

  function useSample() {
    setCredential(JSON.stringify(sampleBachelors, null, 2))
  }

  return (
    <div>

      {!state.success &&

        <form action={formAction} id="blah">
          <div className="rounded-md bg-gray-50 p-2 md:p-6">
            <div className="text-base text-black">
              Thank you {name}, you are now authorized to upload your credential to your ORCID ({orcid}) profile.
            </div>
            {/* Text area into which to paste the credential */}
            <div className="mb-1 md:mb-4">

              <div className="relative mt-1 md:mt-2 rounded-md">
                <div className="relative">
                  <textarea
                    id="vcText"
                    name="vcText"
                    cols={40}
                    rows={10}
                    placeholder="Paste your verifiable credential here."
                    defaultValue={credential}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby="vcTest-error"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-[32px] items-center mt-[24px]">
              <div className="w-full">
                <div
                  className="h-[100px] flex flex-col justify-center text-center opacity-50 rounded-lg border-2 border-dashed border-black"
                  onDrop={handleFileDrop}
                  onDragOver={(e) => {
                    e.preventDefault();
                  }}
                >
                    <label>
                      <div className="text-base text-black">
                        Drag and drop a file or click <span className='underline'>here</span> to choose file
                      </div>
                      <input className="file:hidden" type='file' onChange={handleBrowse} />
                    </label>
                 
                </div>
                </div>



                <div className="justify-center">
                  <Button className="bg-[#429EA6] hover:bg-gray-200 text-gray-900" type='button' onClick={useSample}>Use Sample Credential</Button>
                </div>
              </div>



              <div id="vcText-error" aria-live="polite" aria-atomic="true">
                {state.errors?.vcText &&
                  state.errors.vcText.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>

            {/* Any returned messages, i.e., errors */}
            <div aria-live="polite" aria-atomic="true">
              {state.message ? (
                <p className="mt-2 text-sm text-red-500">{state.message}</p>
              ) : null}
            </div>
          </div>

          {/* The submit button */}
          <div className="mt-4 md:mt-6 flex justify-center md:gap-4">
            <Button className="bg-[#429EA6] hover:bg-gray-200 text-gray-900" type="submit">Add Credential to ORCID</Button>
          </div>
        </form>
      }

      {state.success &&

        <div className=" max-w-[500px] space-y-2.5 p-4 md:-mt-10 text-center">
          <br /><br />
          Your credential has been submitted!
          <br /><br />
          You should momentarily be redirected to the ORCID login page.
          <br /><br />
          <div className="mt-2 md:mt-6 flex justify-center md:gap-4">
            <Button className="bg-[#429EA6] hover:bg-gray-200 text-gray-900" onClick={() => { state.success = false; setSuccess(!success) }}>Cancel</Button>
          </div>
        </div>
      }
    </div>


  );
}
