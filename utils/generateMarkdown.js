// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  console.log(data)
  return `# ${data.title}

# Description

${data.description}

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Installation

The following are necessary to run the applicaion ${data.installation}

# Usage

In order to use this app, ${data.usage}

# License

This Project is liscened under the ${data.liscenes} license.
# Contributing

Contributors: ${data.contributing}

# Tests

The following is needed to run the test ${data.test}

# Questions

If you have any questions use the contact information
${data.username}, ${data.email}
`;
}

module.exports = generateMarkdown;
