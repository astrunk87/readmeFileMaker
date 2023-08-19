
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    GNUGPLv3:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    ISC:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
  }
    return badges[license]
  // badge links grabbed from : https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  // if (license === 'none')
  // return "";

};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
    ISC:'[ISC](https://choosealicense.com/licenses/isc/)',
    GNUGPLv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
  }
  return licenseLinks[license]
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

class Markdown {
  static generateReadme(data) {
    return `
    
# ${data.title}

${renderLicenseBadge(data.license)}
## description
 ${data.description}
 ${data.description1}
 ${data.description2}
 ${data.description3}

## Table of Content 
-[project description](#Description)
-[Usage](#Usage)
-[Contributions](#Contributions)
-[Testing](#Testing)
-[Questions](#Questions)
-[Contact](#Contact)


## Installation
  ${data.installation}
## usage
  ${data.usage}

## License
  ${data.license}
  ${renderLicenseLink(data.license)}

## Contributions 
  ${data.contributions}

## Testing 
  ${data.testing}

## Questions
  ${data.questions}

## Contact 
  ${data.contact}`
  
  


}}

module.exports = Markdown;
