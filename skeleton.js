function renderLicenseBadge(license) {
    if (license.length === 0) {
      return ""
    } else if (license == "Apache") {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license == "Mozilla") {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } else if (license == "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license == "GNU") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license == "Boost") {
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    } else if (license == "ISC") {
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
  }


  function renderLicenseLink(license) {
    if (license.length === 0) {
      return ""
    } else if (license == "Apache") {
      return `https://opensource.org/licenses/Apache-2.0`
    } else if (license == "Mozilla") {
      return `https://opensource.org/licenses/MPL-2.0`
    } else if (license == "MIT") {
      return `https://opensource.org/licenses/MIT`
    } else if (license == "GNU") {
      return `https://www.gnu.org/licenses/gpl-3.0`
    } else if (license == "Boost") {
      return `https://www.boost.org/LICENSE_1_0.txt`
    } else if (license == "ISC") {
      return `https://opensource.org/licenses/ISC`
    }
  }
  

  function renderLicenseSection(license) {
    if (license.length === 0) {
      return ""
    } else {
      return `## License
    ${renderLicenseBadge(license)}
    
    ${renderLicenseLink(license)} 
      `
    }
  }
  

  function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Description
    ${data.projectDescription}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    ## Installation
    ${data.installInfo}
    ## Usage
    ${data.usageInfo}
    ${renderLicenseSection(data.license)}
    ## Contributing
    
    ${data.contributionsInfo}
    
    ## Tests
    ${data.testsInfo}
    ## Questions
    My GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername}) <br>
    Email me: ${data.emailInfo}
  `
  }
  
  module.exports = generateMarkdown;