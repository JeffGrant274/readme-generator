
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${data.licenses}

# Description

${data.description}

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#licenses)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Installation

The following are necessary to run the applicaion ${data.installation}

# Usage

In order to use this app, ${data.usage}

# License

This Project is liscened under the ${data.licenses} license.

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
