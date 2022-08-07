// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// choices: ['GNU GPL v3', 'Mozilla Public License 2.0', 'Apache 2.0', 'CC0', 'N/A'],
function renderLicenseBadge(license) {
  switch(license){
    case 'GNU GPL v3': {
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)\n';
    }
    case 'Mozilla Public License 2.0': {
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)\n`;
    }
    case 'Apache 2.0': {
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)\n`;
    }
    case 'CC0': {
      return `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)\n`;
    }
    case 'N/A': {
      break;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'GNU GPL v3': {
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    }
    case 'Mozilla Public License 2.0': {
      return `(https://opensource.org/licenses/MPL-2.0)`;
    }
    case 'Apache 2.0': {
      return `(https://opensource.org/licenses/Apache-2.0)`;
    }
    case 'CC0': {
      return `(http://creativecommons.org/publicdomain/zero/1.0/)`;
    }
    case 'N/A': {
      break;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'N/A'){
    return '';
  } else{
    console.log(license);
    return `${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    `
  }
}

function renderTitle(title) {
  return `# ${title}`;
}

function renderDescription(description) {
  return `${description}`;
}

function renderAuthorName(name) {
  return `${name}`;
}

function renderHowTo(howTo){
  return `${howTo}`;
}

function renderInstall(install) {
  return `${install}`;
}

function renderReport(report) {
  return `${report}`;
}

function renderContribute(contribute) {
  return `${contribute}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderTitle(data.title)}

Created by: ${renderAuthorName(data.authorName)}
## Description
${renderDescription(data.description)}

## Using the App
${renderHowTo(data.howTo)}

## Installation
${renderInstall(data.install)}

## Report Issues
${renderReport(data.report)}

## Contribute
${renderContribute(data.contribute)}

## Licenses
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
