// TODO: Include packages needed for this application
// listed below
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {} *******

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
const Markdown = require(`./utils/generateMarkdown.js`);

// below grabbed from class work with inquirer and questions modified from profesinall read me guide proved in class work
const inquirer = require('inquirer');
const fs = require('fs');


    const questions = [   
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
        name: 'description1',
        message: 'What was your motivation for making this project?',
    },
    {
        type: 'input',
        name: 'description2',
        message: 'What problem does this project solve',
    },
    {
        type: 'input',
        name: 'description3',
        message: 'What did you learn',
    },
    
    // {
    //   type: 'checkbox',
    //   message: 'What sections do you need in your table of contents',
    //   name: 'table',
    //   choices: ['#Installation', '#Usage', '#Credits', '#License'],
    // },
    {
        type: 'input',
        name: 'installation',
        message: 'what is need to install this program?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'how do you use this program?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you need?',
        choices:['none', 'MIT','ISC', 'GNU GPLv3']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'list any contributions:',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'examples of testing:',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'enter email address:',
    },
   
  ]


//   .then((data) => {
//     const filename = `${data.title}.json`;
    
function runApp() {
    return inquirer.prompt(questions)
        .then((data) => {
        const mark = Markdown.generateReadme(data)      
        fs.writeFile('READMEtest.md',mark, function (err){ 
            if (err) {
                console.log(err) 
             } else { console.log('Success!')
            }
        })}
        
    )}

runApp()    
// ^ with help from youtube video linked in readme file

