// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const prompts = [
    {
        type: "input",
        name: "username",
        message: "Enter Github username"
        
    },
    {
        type: "input",
        name: "title",
        message: "Enter project title"
        
    },
    {
        type: "input",
        name: "description",
        message: "Enter project description"
        
    },
    {
        type: "input",
        name: "installation",
        message: "Detail installation requirements"
        
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage?"
        
    },
    {
        type: "list",
        name: "license",
        message: "what license should the project have?",
        choices: [
            'MIT',
            'GNU',
            'Apache',
            'None'
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "List contributors Github usernames separated by commas",
        
    },
    {
        type: "input",
        name: "tests",
        message: "Enter testing procedures",
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
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
    inquirer
        .prompt(prompts)
        .then(response => {
            writeToFile({ ...response, ...data.data }) ;
        })
        .catch(err => console.log(err));
};

// Function call to initialize app
init();
