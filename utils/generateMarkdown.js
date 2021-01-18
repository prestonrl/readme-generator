function renderLicenseBadge(data) {
  if (!data.license || data.license === "None") {
    return '';
  } else {
    return renderLicenseLink (data);
  }
};

function renderLicenseLink(data) {
  if (data.license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (data.license === 'GNU') {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
  else if (data.license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (data.license === 'BSD') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else if (data.license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  };
};

function renderLicenseSection(license) {
  if (!license || license === "None") {
    return '';
  } else {
  return `## License
  * This application is covered under the ${license} license`;
  }
};

const generateInstall = installText => {
  if (!installText) {
    return ''
  } else {
    return `## Installation
  ${installText}
  `
  }
};

const generateContribute = contributeText => {
  if (!contributeText) {
    return ''
  } else {
    return `## Contributions
  ${contributeText}
  `
  }
};

const generateTesting = testText => {
  if (!testText) {
    return ''
  } else {
    return `## Testing
  ${testText}
  `
  }
};

installCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Installation](#installation)`
  }
};

const contributeCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Contributions](#contributions)`
  }
};

const testCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Testing](#testing)`
  }
};

const testLicense = data => {
  if (!data.license || data.license === "None") {
    return '';
  } else {
    return `* [License](#license)`
  }
};

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data)}
  ## Description
  ${data.description}
  ## Table of Contents
  ${installCheck(data.installation)}
  * [Usage](#usage)
  ${testLicense(data)}
  ${contributeCheck(data.contribution)}
  ${testCheck(data.testing)}
  * [Questions](#questions)
  
  ${generateInstall(data.installation)}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ${generateContribute(data.contribution)}
  ${generateTesting(data.testing)}
  ## Questions
  Created by: ${data.username}
  
  If you have questions please contact [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
