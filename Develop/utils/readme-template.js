const readmeTemplate = function (answers) {
  let linLink = "";

  if (answers.license === "MIT") {
    linLink = `[${answers.license}](https://opensource.org/licenses/MIT)`;
  } else if (answers.license === "GPLv2") {
    linLink = `[${answers.license}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)`;
  } else if (answers.license === "GPLv3") {
    linLink = `[${answers.license}](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  } else if (answers.license === "Apache") {
    linLink = `[${answers.license}](https://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (answers.license === "BSD 3-clause") {
    linLink = `[${answers.license}](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (answers.license === "BSD 2-clause") {
    linLink = `[${answers.license}](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (answers.license === "LGPLv3") {
    linLink = `[${answers.license}](https://www.gnu.org/licenses/lgpl-3.0.en.html)`;
  } else if (answers.license === "AGPLv3") {
    linLink = `[${answers.license}](https://www.gnu.org/licenses/agpl-3.0.en.html)`;
  } else {
    linLink = answers.license;
  }

  return `
          
# ${answers.projectTitle}

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

## This app falls under these license agreements
${answers.license}
More information can be found here: ${linLink}

## Additional contributors to this app
${answers.contributorName}

## Questions?
Contact ${answers.userName} at: ${answers.email}
Or visit the Github of the creator: [${answers.userName}](https://github.com/${answers.userName})
                
          `;
};

// readmeTemplate(answers);

module.exports = readmeTemplate;
