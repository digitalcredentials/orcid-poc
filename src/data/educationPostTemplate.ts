// eslint-disable-next-line  @typescript-eslint/no-explicit-any
  export function populateORCIDTemplateFromVC(vc:any) : any {
    const organization = getIssuerDetails(vc.issuer.id)
    const result = JSON.stringify({
      'department-name': vc.credentialSubject.achievement.fieldOfStudy,
      'role-title': vc.credentialSubject.achievement.name,
      organization,
      'start-date': vc.credentialSubject.activityStartDate,
      'end-date': vc.credentialSubject.activityEndDate
    })
    return result;
  }
  
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
  function getIssuerDetails(issuerId:string) : any {
    // this will come from a registry
    console.log(issuerId)
    return {
      "name": "McMaster University",
      "address": {
        "city": "Hamilton",
        "region": "Ontario",
        "country": "CA"
      },
      "disambiguated-organization": {
        "disambiguated-organization-identifier": "https://ror.org/02fa3aq29",
        "disambiguation-source": "ROR"
      }
    }
  }