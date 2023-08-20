
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// fixed fuction below with help from tutor session with sam pai
function renderLicenseBadge(license) {
  const badges = {
    MIT:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    GNUGPLv3:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    ISC:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    none:  '',
  }
    return badges[license] 
};

// render functions were with gudinces from youtube video linked in readme

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
    ISC:'[ISC](https://choosealicense.com/licenses/isc/)',
    GNUGPLv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
    none: 'none',
  }
  return licenseLinks[license]
};
function renderLicenseSection(license) {
  if(license) {
    return `Licensed under the ${renderLicenseLink(license)} license`
  
}};


// TODO: Create a function to generate markdown for README

function generateReadme(data) {
  return `

# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Content 
* [project description](#Description)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Testing](#Testing)
* [Questions](#Questions)
* [Contact](#Contact)


## description
 ${data.description1}
 ${data.description2}
 ${data.description3}

## Installation
  ${data.installation}

## usage
  ${data.usage}

## License
  ${renderLicenseSection(data.license)} 

## Contributions 
  ${data.contributionsPeople}
  ${data.contributionsTutorials}

## Testing 
  ${data.testing}

## Questions
  If you have questions please direct them to this email address:
  ${data.questions}
  
## Github link
  Check out my github!
  ${data.github}  
  

`}

module.exports = generateReadme;
