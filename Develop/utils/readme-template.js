const readmeTemplate = function (answers) {
  let linLink = "";

  if (answers.license === "MIT") {
    linLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (answers.license === "GPLv2") {
    linLink = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (answers.license === "GPLv3") {
    linLink = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (answers.license === "Apache") {
    linLink = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (answers.license === "BSD 3-clause") {
    linLink = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (answers.license === "BSD 2-clause") {
    linLink = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (answers.license === "LGPLv3") {
    linLink = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (answers.license === "AGPLv3") {
    linLink = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else {
    linLink = answers.license;
  }

  return `
          
# ${answers.projectTitle}

## This app falls under these license agreements
${answers.license}
More information can be found here: ${linLink}

## ${answers.descriptionTitle}
${answers.description}

## Table of contents
- [Packages](#Packages-required-to-install-this-app)
- [How to Install](#Install-process)
- [How to](#How-this-app-should-be-used)
- [License Information](#This-app-falls-under-these-license-agreements)
- [Contributors](#Additional-contributors-to-this-app)

## Packages required to install this app
${answers.packages}

## Install process
${answers.installProcess}

## How this app should be used
${answers.useCase}

## Tests
${answers.tests}


## Additional contributors to this app
${answers.contributorName}

## Questions?
Contact ${answers.userName} at: ${answers.email}
Or visit the Github of the creator: [${answers.userName}](https://github.com/${answers.userName})
                
          `;
};

// readmeTemplate(answers);

module.exports = readmeTemplate;
