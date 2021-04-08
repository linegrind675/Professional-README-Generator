const inquirer = require("inquirer");
const fs = require("fs");


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
    ])
}