// function to generate markdown for README
function generateMarkdown(data) {
  let badge;
  if(data.licence === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  
  return `# ${data.title}
  ${badge}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Licence
${data.licence}
## Contributing
${data.contributing}
## Questions
https://github.com/${data.github}
You can reach out to me at ${data.email}
`;
}

module.exports = generateMarkdown;
