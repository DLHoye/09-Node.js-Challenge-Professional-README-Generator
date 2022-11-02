// function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    licenses,
    contributors,
    tests,
    username,
    email,
  } = data;
  return `
  
  ${licenses}
  # ${title}
  ## Description
  ${data.description}\n
  ## Table of Contents
  - [Installation](#installation)
  - [Images](#images)
  - [Contribution](#contributing)
  - [Testing](#tests)
  - [Questions](#questions)
  - [License](#license)
  ## Installation
  ${installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${tests}

## Questions
Github: [${username}](https://www.github.com/${username})  \n
Email: ${email}
  `;
}

module.exports = generateMarkdown;
