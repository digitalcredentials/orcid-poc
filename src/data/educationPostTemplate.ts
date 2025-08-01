// eslint-disable-next-line  @typescript-eslint/no-explicit-any
  export function populateORCIDTemplateFromVC(vc:any) : any {
    const startDate = new Date(vc.credentialSubject.activityStartDate)
    const endDate = new Date(vc.credentialSubject.activityEndDate)
    const organization = getIssuerDetails(vc.issuer.id)
    const result = JSON.stringify({
      'department-name': vc.credentialSubject.achievement.fieldOfStudy,
      'role-title': vc.credentialSubject.achievement.name,
      organization,
      'start-date': {'year': {'value': startDate.getUTCFullYear().toString()}, 'month': {'value': (startDate.getUTCMonth() + 1).toString().padStart(2, "0")}, 'day': {'value': startDate.getUTCDate().toString().padStart(2, "0")}}, 
      'end-date': {'year': {'value': endDate.getUTCFullYear().toString()}, 'month': {'value': (endDate.getUTCMonth() + 1).toString().padStart(2, "0")}, 'day': {'value': endDate.getUTCDate().toString().padStart(2, "0")}}
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