
  export function populateORCIDTemplateFromVC(vc:any) : any {
    const organization = getIssuerDetails(vc.issuer.id)
    const startDate = {year: {value: "2020"}, month: {value: "09"}, day: {value: "01"} }
    const endDate = {year: {value: "2024"}, month: {value: "06"}, day: {value: "30"} }
    const result = JSON.stringify({
      'department-name': 'Computer Science',
      'role-title': vc.credentialSubject.degree.name,
      organization,
      'start-date': startDate,
      'end-date': endDate
    })
    return result;

  }

  function getIssuerDetails(issuerId:string) : any {
    // this will come from a registry
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