export const sampleBachelors = {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://purl.imsglobal.org/spec/ob/v3p0/extensions.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:54BBF048-3826-4CD6-B1CC-B3612F239557",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "credentialSubject": {
        "type": [
            "AchievementSubject"
        ],
        "activityStartDate": "2010-09-04T00:00:00Z",
        "activityEndDate": "2014-06-01T00:00:00Z",
        "identifier": [
            {
                "type": "IdentityObject",
                "identityHash": "Taylor Tuna",
                "identityType": "name",
                "hashed": false,
                "salt": "not-used"
            }
        ],
        "achievement": {
            "id": "urn:uuid:BFD1E03B-26C2-4151-82C6-12CC19982BBC",
            "type": [
                "Achievement"
            ],
            "achievementType": "Degree",
            "criteria": {
                "id": "urn:uuid:C0571026-DDEB-4A7E-813D-8445663C7A35",
                "narrative": "### Degree Requirements\nStudents must complete..."
            },
            "description": "A degree",
            "name": "Bachelor of Engineering Demo Degree",
            "fieldOfStudy": "Materials Science"
        }
    },
    "issuer": {
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "type": [
            "Profile"
        ],
        "name": "Faculty of Engineering - McMaster University",
        "address": {
            "type": [
                "Address"
            ],
            "addressCountry": "Canada",
            "addressRegion": "Ontario",
            "addressLocality": "Hamilton"
        },
        "otherIdentifier": [
            {
                "type": "IdentifierEntry",
                "identifier": "https://ror.org/02fa3aq29",
                "identifierType": "ROR"
            }
        ]
    },
    "validFrom": "2025-07-01T00:00:00Z",
    "validUntil": "2025-12-01T00:00:00Z",
    "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-07-28T20:11:43Z",
        "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "proofPurpose": "assertionMethod",
        "proofValue": "z5pQVQdweBG4NHkDM2D7uddqe1ozjB2GeJ5YZmbw1NSXKGW9LdVTxjMrdJfAHPpTwgm2SthCTR5dtRtBbBQLy4g9X"
    }
}