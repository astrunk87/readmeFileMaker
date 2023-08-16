// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// grabbed from class work on creating file in node
const fs = require('fs');

fs.writeFile('README.md', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);

// below grabbed from class work with inquirer and questions modified from profesinall read me guide proved in class work
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    // might not need this question because next few questions make up the description
    {
        type: 'input',
        name: 'description',
        message: 'write a short description of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What was your motivation for making this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What problem does this project solve',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What did you learn',
    },
    
    {
        type: 'input',
        name: 'table of contents',
        message: 'What is the name of your project?',
      },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });