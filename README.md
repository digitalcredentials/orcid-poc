# ORCID POC

A proof of concept demonstrating how credentials like a diploma or work history - that have been issued as Verifiable Credentials - can be uploaded to the credential holder's ORCID profile as trustworthy assertions.

This Proof of Concept runs against the wonderful ORCID sandbox server, which is a second instance of ORCID that works the same way as the public ORCID site, but with test data, so we can freely experiment with our new system.

## Try it!

We've got a running instance of our app here:  

[https://orcid.dcconsortium.org](https://orcid/dcconsortium.org)

To try it:

1. First create an account in the ORCID Sandbox:

[https://sandbox.orcid.org/register](https://sandbox.orcid.org/register)

Note that to create an account in the sandbox, you'll have to use a 'mailinator.com' email address as your 'Primary email'. Mailinator is a clever system that allows you to send email to any account name at mailinator, like say blahblahblah@mailinator.com. You can then go to the mailinator.com page and ask to see any emails that have been sent to blahblahblah (and in fact anyone at all can see all emails sent to the account, i.e., these is zero privacy - these are entirley public.)

So basically then, when setting up your ORCID sandbox account, use some arbitrary mailinator address. After finishing the ORCID account setup go look at the emails sent to that mailinator account (e.g., enter 'blahblahblah' in the 'Enter Public Mailinator Address' box in the top left corner of the landing page) and you should see the confirmation email sent from ORCID. Click the link 'Verify Your Email Address' in the email to confirm your ORCID account setup.

2. Go to our upload page:

[https://orcid.dcconsortium.org](https://orcid/dcconsortium.org)

You'll be prompted to authorize with ORCID. Do that by clicking the 'Authorize with ORCID' button.

After you've authorized with ORCID, you'll be take back to our upload page.

3. Upload a Verifiable Credential.

For this Proof of Concept, the uploader only accepts Verifiable Credentials that follow a very specific schema (that we essentially just made up for this POC) and that have been signed by an issuer whose DID (Decentralized Identifier) is in a DCC registry. Unlikely that you'd have one of these handy, but stay calm, you can just click the 'Use Sample Credential' button, which will populate the text area above the button with a pre-signed and populated Verifiable Credential that conveniently follows the schema needed for the POC.

You can take a look at the Verifiable Credential to see what it looks like and what credential you are about to add to your ORCID sandbox profile (i.e, that you have a Bachelors of Science in Computer Science from Queen's University), but don't change anything in the credential otherwise you'll invalidate the signature. For now, just go with the flow and see what happens. Rest assured the ORCID sandbox is nothing more than a test server and you aren't making any fraudulent claims.

Finally click 'Add Credential to ORCID', which should upload the credential and tell you it's done so.

4. Go check out your ORCID sandbox profile.

Login to your orcid sandbox account (you are likely already logged in from earlier steps) and check out your ORCID inbox:

https://sandbox.orcid.org/inbox

You should see a notification: 

'MIT - Digital Credentials Consortium has made changes to your ORCID record'

Great! 

Click the notification to see details. You can also click the little person icon beside your ORCID user name in the top right corner, and then 'View my ORCID record' to see how it looks publicly.

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

At the moment there is a single page, which you can edit: `src/app/page.tsx`. The page auto-updates as you edit the file.


## Next.js

This app was built with Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
