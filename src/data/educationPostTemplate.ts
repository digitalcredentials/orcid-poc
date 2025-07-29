// eslint-disable-next-line  @typescript-eslint/no-explicit-any
  export function populateORCIDTemplateFromVC(vc:any) : any {
    const startDate = new Date(vc.credentialSubject.activityStartDate)
    const endDate = new Date(vc.credentialSubject.activityEndDate)
    const organization = getIssuerDetails(vc.issuer.id)
    const result = JSON.stringify({
      'department-name': vc.credentialSubject.achievement.fieldOfStudy,
      'role-title': vc.credentialSubject.achievement.name,
      organization,
      'start-date': {'year': {'value': startDate.getFullYear().toString()}, 'month': {'value': startDate.getMonth().toString().padStart(2, "0")}, 'day': {'value': startDate.getDate().toString().padStart(2, "0")}}, 
      'end-date': {'year': {'value': endDate.getFullYear().toString()}, 'month': {'value': endDate.getMonth().toString().padStart(2, "0")}, 'day': {'value': endDate.getDate().toString().padStart(2, "0")}}
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