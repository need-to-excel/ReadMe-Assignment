const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// const questions = [

// ];

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give brief description about the project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information',
    },
    {
      type: 'list',
      name: 'licence',
      message: 'Please select a Licence',
      choices: ['MIT', 'GPL', 'Apache', 'None']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please enter contributing guidelines',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
    },
  ]);



// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
promptUser().then(data => {
    console.log(data)
    let ReadMe = generateMarkdown(data)
    console.log(ReadMe)
    writeToFile("ReadMe2.md", ReadMe)
})


}

// function call to initialize program
init();
