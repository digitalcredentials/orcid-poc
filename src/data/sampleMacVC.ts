export const macVC = 
      {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/dcc/v1",
          "https://w3id.org/security/suites/ed25519-2020/v1"
        ],
        "type": [
          "VerifiableCredential"
        ],
        "credentialSubject": {
          "description": "Test Student was awarded a Master of Engineering on 2019-11-22",
          "name": "Test Student"
        },
        "id": "urn:uuid:df28c140-e7a5-4ab4-9950-b534d0131853",
        "issuanceDate": "2024-08-01T14:24:50.499Z",
        "issuer": {
          "id": "did:web:test.credentials.mcmaster.ca",
          "name": "McMaster University TEST ISSUER"
        },
        "proof": {
          "type": "Ed25519Signature2020",
          "created": "2024-08-01T14:24:50Z",
          "proofPurpose": "assertionMethod",
          "proofValue": "z4Kanyr1495YqhBzrp1n99xn68BZvGEAAFfcpBqmeLf4H3APukGzNqw1biqDMcCWG3RyCHneSjAZhyVrkjWkMFBYG",
          "verificationMethod": "did:web:test.credentials.mcmaster.ca#z6MkpZMTRMBSkLsnnQ2usp3tHfMaxrfHmTQmofTPoUZHroYA"
        }
      }

  