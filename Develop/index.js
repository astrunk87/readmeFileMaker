// TODO: Include packages needed for this application
// listed below
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// grabbed from class work on creating file in node
// const fs = require('fs');

// fs.writeFile('README.md', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

// brings in generate markdown function
const generateMarkdown = require(`./utils/generateMarkdown`);

// below grabbed from class work with inquirer and questions modified from profesinall read me guide proved in class work
const inquirer = require('inquirer');
const fs = require('fs');
let filename = ""

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
    // {
    //     type: 'input',
    //     name: 'description1',
    //     message: 'What was your motivation for making this project?',
    // },
    // {
    //     type: 'input',
    //     name: 'description2',
    //     message: 'What problem does this project solve',
    // },
    // {
    //     type: 'input',
    //     name: 'description3',
    //     message: 'What did you learn',
    // },
    
    // {
    //   type: 'checkbox',
    //   message: 'What sections do you need in your table of contents',
    //   name: 'table',
    //   choices: ['#Installation', '#Usage', '#Credits', '#License'],
    // },
    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: 'what is need to install this program?',
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'how do you use this program?',
    // },
    // {
    //     type: 'list',
    //     name: 'license',
    //     message: 'What license do you need?',
    //     choices:['none', 'MIT', 'GNU GPLv3']
    // },
    // {
    //     type: 'input',
    //     name: 'contributions',
    //     message: 'list any contributions:',
    // },
    // {
    //     type: 'input',
    //     name: 'testing',
    //     message: 'examples of testing:',
    // },
    // {
    //     type: 'input',
    //     name: 'questions',
    //     message: 'enter email address:',
    // },
    // {
    //   type: 'list',
    //   message: 'What is your preferred method of communication?',
    //   name: 'contact',
    //   choices: ['email', 'phone', 'telekinesis'],
    // },
  ])

//   .then(generateMarkdown);
//   .then((generateMarkdown) => {
//      const filename = `READMEtest.md`;

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
//   });
  .then((data) =>{
    const filename = `$(respone.name.toLowerCase().split(' '.join('')}.jason`;

    fs.writeFile("filename.json", JSON.stringify(data) =>
  err ? console.error(err) : console.log('Success!')
    );  
});
// ^ from class work