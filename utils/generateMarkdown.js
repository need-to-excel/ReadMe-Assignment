// function to generate markdown for README
function generateMarkdown(data) {
  let badge;
  if(data.licence === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (data.licence === 'GPL') {
    badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  } else if (data.licence === 'Apache') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    badge = ''
  }
  
 
  return `# ${data.title}
  ${badge}
## Table of content
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Licence](#licence)
* [Contribution](#contributions)
* [Questions](#questions)

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
