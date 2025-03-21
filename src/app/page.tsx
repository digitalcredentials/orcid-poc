'use client'
import Image from "next/image";
import { Button } from '@/app/ui/button';
import { orcidAuthAction } from '@/app/lib/orcidAuthAction';
import { useState } from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/LightModeLogo.png"
          alt="DCC logo"
          width={180}
          height={38}
          priority
        />
        Add your credential to your ORCID profile.

        You will first authorize the addition with ORCID, after which you will be prompted to upload your credential.

       {/* The login button */}
       <div className="mt-4 md:mt-6 flex justify-center md:gap-4">
        <Button className="bg-[#6fa64235] hover:bg-gray-200 text-gray-900" onClick={async () => {
          orcidAuthAction()
        }}>Authorize with ORCID</Button>
        

      </div>


      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
  
      </footer>
    </div>
  );
}
