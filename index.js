// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const prompts = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter Github username",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your username');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "title",
            message: "Enter project title",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title');
                    return false;
                }
            }            
        },
        {
            type: "input",
            name: "description",
            message: "Enter project description",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your project description');
                    return false;
                }
            }              
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Does your project need installation instructions?',
            default: true
        },
        {
            type: "input",
            name: "installation",
            message: "Detail installation instructions:",
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            }           
        },
        {
            type: "input",
            name: "usage",
            message: "Explain the usage of the project",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter your project description');
                    return false;
                }
            }             
        },
        {
            type: "list",
            name: "license",
            message: "What license should the project have?",
            choices: [
                'MIT',
                'GNU',
                'Apache',
                'BSD',
                'ISC',
                'None'
            ]
        },
        {
            type: 'confirm',
            name: 'confirmContributions',
            message: 'Will your project be open to contributions?',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please explain your contribution guidelines for this project:',
            when: ({ confirmContributions }) => {
                if (confirmContributions) {
                    return true
                } else {
                    return false
                }
            }            
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Will your project need testing instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Please input testing instructions for the user:',
            when: ({ confirmTest }) => {
                if (confirmTest) {
                    return true;
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }
        }
    ])
        .then(data => {
            return generateMarkdown(data);
        })
        .then(pageMarkdown => {
            return writeToFile(pageMarkdown);
        })
        .catch(err => {
            console.log(err);
        });
};

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    prompts();
};

// Function call to initialize app
init();
