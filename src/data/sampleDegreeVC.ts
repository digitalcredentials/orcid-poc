export const sampleBachelors = {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://www.w3.org/ns/credentials/examples/v2"
    ],
    "id": "http://university.example/credentials/3732",
    "type": [
        "VerifiableCredential",
        "ExampleDegreeCredential"
    ],
    "issuer": "https://university.example/issuers/565049",
    "validFrom": "2010-01-01T00:00:00Z",
    "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "degree": {
            "type": "ExampleBachelorDegree",
            "name": "Bachelor of Science and Arts"
        }
    },
    "proof": {
        "type": "DataIntegrityProof",
        "created": "2025-02-25T01:47:38Z",
        "verificationMethod": "did:key:z6MkkZwCZavHWfRQAu9WbrDGJrSyxQV6Y3v44GdJeX8X3Vtu",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2SLLvvKkaiM23MphyzXZ3AMiWRHop7VJR8mtWDnH2YUC6K33QFE3rxaJhuLrdAfCVFAiajRY3FyiDRqKmTM2C8rk"
    }
}