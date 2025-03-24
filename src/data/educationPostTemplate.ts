const educationPostTemplate = {
    "department-name": "Philosophy, Politics, and Economics",
    "role-title": "Bachelor of Arts",
    "start-date": {
      "year": {
        "value": "2021"
      },
      "month": {
        "value": "10"
      },
      "day": {
        "value": "02"
      }
    },
    "end-date": {
      "year": {
        "value": "2024"
      },
      "month": {
        "value": "06"
      },
      "day": {
        "value": "30"
      }
    },
    "organization": {
      "name": "University of Oxford",
      "address": {
        "city": "Oxford",
        "region": "Oxfordshire",
        "country": "GB"
      },
      "disambiguated-organization": {
        "disambiguated-organization-identifier": "https://ror.org/052gg0110",
        "disambiguation-source": "ROR"
      }
    },
    "url": {
      "value": "https://www.ox.ac.uk"
    }
  }

  export function populateORCIDTemplateFromVC(vc:any) : any{
    const templateCopy = JSON.parse(JSON.stringify(educationPostTemplate));
    
  }