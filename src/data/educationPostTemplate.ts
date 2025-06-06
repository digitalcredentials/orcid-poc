// eslint-disable-next-line  @typescript-eslint/no-explicit-any
  export function populateORCIDTemplateFromVC(vc:any) : any {
    const organization = getIssuerDetails(vc.issuer.id)
    const result = JSON.stringify({
      'department-name': vc.credentialSubject.degree.program,
      'role-title': vc.credentialSubject.degree.name,
      organization,
      'start-date': vc.credentialSubject.degree.startDate,
      'end-date': vc.credentialSubject.degree.endDate
    })
    return result;
  }
  
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
  function getIssuerDetails(issuerId:string) : any {
    // this will come from a registry
    console.log(issuerId)
    return {
      "name": "Queen's University",
      "address": {
        "city": "Kingston",
        "region": "Ontario",
        "country": "CA"
      },
      "disambiguated-organization": {
        "disambiguated-organization-identifier": "https://ror.org/02y72wh86",
        "disambiguation-source": "ROR"
      }
    }
  }