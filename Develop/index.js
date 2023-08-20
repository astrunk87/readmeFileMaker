

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// brings in generate markdown function
const generateReadme = require(`./utils/generateMarkdown.js`);

// below grabbed from class work with inquirer and questions modified from professional read me guide proved in class work
const inquirer = require('inquirer');
const fs = require('fs');


const questions = [   
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
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
        name: 'contributionsPeople',
        message: 'list any people that contributed',
    },
    {
        type: 'input',
        name: 'contributionsTutorials',
        message: 'list any tutorials you used',
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
    {
        type: 'input',
        name: 'github',
        message: 'enter your github link here',
    },
   
  ]


    
function runApp() {
    return inquirer.prompt(questions)
        .then((data) => {
        const mark = generateReadme(data)      
        fs.writeFile('README.md',mark, function (err){ 
            if (err) {
                console.log(err) 
             } else { console.log('Success!! your readme file has been created')
            }
        })}
        
    )}

runApp()    
// ^function above with help from youtube video linked in readme file

