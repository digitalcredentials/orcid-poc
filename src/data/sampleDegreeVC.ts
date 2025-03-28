export const sampleBachelors = {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "http://university.example/credentials/3732",
    "type": [
        "VerifiableCredential",
        "DegreeCredential"
    ],
    "issuer": {
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q"
    },
    "validFrom": "2010-01-01T00:00:00Z",
    "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "degree": {
            "name": "Bachelor of Science",
            "program": "Computer Science",
            "startDate": {
                "year": {
                    "value": "2021"
                },
                "month": {
                    "value": "02"
                },
                "day": {
                    "value": "07"
                }
            },
            "endDate": {
                "year": {
                    "value": "2025"
                },
                "month": {
                    "value": "03"
                },
                "day": {
                    "value": "22"
                }
            },
            "conferred": {
                "year": "2024",
                "month": "09",
                "day": "04"
            }
        }
    },
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-03-28T15:39:12Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "proofPurpose": "assertionMethod",
        "proofValue": "z4RgEtoPPefbKEeGjXZcwMBBDe68ARugSzcxihzKfC8AQCJDvbP78w6XQvW1qWhYNxmw4PTeXV5VbWxY7tczQQJyJ"
    }
}



/*
,

for the inline context
        {
            "degree": "urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66",
            "start"
        }

for the credentialSubject

          "degree": {
            "type": "ExampleBachelorDegree",
            "name": "Bachelor of Science and Arts"
        }


            */