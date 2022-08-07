// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license.show == false){
    return '';
  } else{
    renderLicenseBadge(license);
    renderLicenseLink(license);
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
