// TODO: Create a function that returns a license badge based on which license is passed in
//const generateMarkdown = require('./utils/generateMarkdown');
// If there is no license, return an empty string
// Function to return the license badge based on the selected license
// Assuming these functions are defined in the same file or imported from another module
function renderLicenseBadge(license) {
  if (!license) {
      return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License
This project is licensed under the ${license} license.`;
}

function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

${renderLicenseSection(data.license)}

## Questions
If you have any questions about the repository, you can reach me via:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

export default generateMarkdown;