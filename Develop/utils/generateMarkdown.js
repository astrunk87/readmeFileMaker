

const fs = require('fs');
const filename = "READMEtest.md";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {

//   if (license === 'none')
//   return "";
// } else {
//   return '[!github]'(http://img.shields.io/badge/license-${liscense}-blue.svg)
// }

// }

// ^grabbed from office hours work 
// below grabbed from live channel in slack, posted by TA Kimberly Rodriguez
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

// function generateMarkdown(data) {
//   fs.writeFile(filename), (err) =>
//   err ? console.log(err) : console.log('Success!');
class Markdown {
  static generateReadme(data) {
    return `
# ${data.title}
## description
 ${data.description}
 ${data.description1}
 ${data.description2}
 ${data.description3}

 ## Table of Content 
  ${data.table}

## Installation
  ${data.installation}
## usage
  ${data.usage}

## License
  ${data.license}

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
