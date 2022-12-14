// TODO: Include packages needed for this application
// We need: inquirerer, fs, and generateMarkdown
// Note to self: inquirer docs: npmjs.com/package/inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Need questions on: title, author name, description, using the app, installation, reporting issues, contributing, and licenses
const questions = ['Title of the project:', 'GitHub username:', 'Contact email:', 'Description of the project:',
'How do you use the project?', 'How do you install the project?', 'Any tests that can be run?',
'How can someone contribute to the project, if possible?', 'Any licenses?'];

// TODO: Create a function to write README file
// We can use generateMarkdown for this
function writeToFile(fileName, data) {
    // console.log('function called');
    let content = generateMarkdown(data);    

    fs.writeFile(`./output/${fileName}`, content, err => {
        err ? console.error(err) : console.log('Success!')
    });
}

// TODO: Create a function to initialize app
// Function that will be called to put everything above together
function init() {

    inquirer
        .prompt([
            {
            type: 'input',
            message: `${questions[0]}`,
            name: 'title',
            },
            {
            type: 'input',
            message: `${questions[1]}`,
            name: 'authorName',
            },
            {
            type: 'input',
            message: `${questions[2]}`,
            name: 'email',
            },
            {
            type: 'input',
            message: `${questions[3]}`,
            name: 'description',
            },
            {
            type: 'input',
            message: `${questions[4]}`,
            name: 'howTo',
            },
            {
            type: 'input',
            message: `${questions[5]}`,
            name: 'install',
            },
            {
            type: 'input',
            message: `${questions[6]}`,
            name: 'test',
            },
            {
            type: 'input',
            message: `${questions[7]}`,
            name: 'contribute',
            },
            {
            type: 'list',
            choices: ['GNU GPL v3', 'Mozilla Public License 2.0', 'Apache 2.0', 'CC0', 'N/A'],
            message: `${questions[8]}`,
            name: 'license',
            },
        ])
        .then((response) =>
            //console.log(response),

            //console.log('calling the writeToFile function'),
            // response will be seen as "data" in writeToFile function
            writeToFile('README.md', response)
        )
}

// Function call to initialize app
init();