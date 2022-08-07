// TODO: Include packages needed for this application
// We need: inquirerer, fs, and generateMarkdown
// Note to self: inquirer docs: npmjs.com/package/inquirer
const fs = require('fs');
const inquirerer = require('inquirer');
const generateMarkdown = require('generateMarkdown');

// TODO: Create an array of questions for user input
// Need questions on: title, author name, description, using the app, installation, reporting issues, contributing, and licenses
const questions = ['Title of the project:', 'Name of the main author:', 'Description of the project:',
'How do you use the project?', 'How do you install the project?', 'Where can we go to report issues?',
'How can someone contribute to the project, if possible?', 'Any licenses?'];

// TODO: Create a function to write README file
// We can use generateMarkdown for this
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// Function that will be called to put everything above together
function init() {

    inquirer
        .prompt([
            {
            type: '',
            message: '',
            name: '',
            },
            {
            type: '',
            message: '',
            name: '',
            },
            {
            type: '',
            message: '',
            name: '',
            },
        ])
        .then((response) =>
            console.log(response)
        );

}

// Function call to initialize app
init();