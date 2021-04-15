const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {

    return inquirer.prompt([

        {
            type: "input",
            name: "project_title",
            message: "What is your project titled?"
        },
        {
            type: "input",
            name: "description",
            message: "Briefly describe your project."
        },
        {
            type: "input",
            name: "install",
            message: "Are there any installations required?"
        },
        {
            type: "input",
            name: "use",
            message: "What is the use of the application?"
        },
        {
            type: "input",
            name: "contributions",
            message: "Are there any contribution rules?"
        },
        {
            type: "input",
            name: "test",
            message: "Please provide test instructions if necessary?"
        },
        {
            type: "checkbox",
            name: "license",
            message: "License?",
            choices: [
                "[MIT License](LICENSE.txt)",
                "[GNU GPLv3 License](COPYING.txt)"
            ]
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address."
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username."
        }
    ]);
}

function generateREADME(answers) {
    return `${answers.project_title}
    
    #### Table of Contents

1. [Project Description](#project-description)
2. [Installation Instructions](#installation-instructions)
3. [Usage Information](#usage-information)
4. [Contributor Guidelines](#contributor-guidelines)
5. [Test Instructions](#test-instructions)
6. [License](#license)
7. [Questions](#questions)

## Project Description
* ${answers.description}

## Installation Instructions
* ${answers.install}

## Usage Information
* ${answers.use}

## Contributor Guidelines
* ${answers.contributions}

## Test Instructions
* ${answers.test}

## License
* licensed under the ${answers.license}

## Questions
* For additional help or questions about collaboration, please reach out to ${answers.email}
* Follow me on Github at [${answers.github}](http://github.com/${answers.github})`;

}

promptUser()
    .then(function(answers) {
        const readme = generateREADME(answers);

        return writeFileAsync("README.md", readme);
    })
    .then(function() {
        console.log(" README.md has been created");
    })
    .catch(function(err) {
        console.log(err);
    });