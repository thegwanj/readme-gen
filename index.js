// TODO: Include packages needed for this application
// We need: inquirerer, fs, and generateMarkdown
// Note to self: inquirer docs: npmjs.com/package/inquirer
const fs = require('fs');
const inquirerer = require('inquirer');
const generateMarkdown = require('generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

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