// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
// const utils = require('./utils');

// const writeFileAsync = utils.promisify(fs.writeFile);
const generatorMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description for your project",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions for this app",
    name: "installation",
  },
  {
    type: "input",
    message: "How does the user use the app",
    name: "usage",
  },
  {
    type: "input",
    message: "Who contributed to the project",
    name: "contributing",
  },
  {
    type: "input",
    message: "what cmds are needed for testing",
    name: "test",
  },
  {
    type: "list",
    message: "what liscense is being used",
    name: "licenses",
    choices: ["MIT", "Pearl", "IBM"],
  },
  {
    type: "input",
    message: "What is your github username",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success! Your README.md file has been generated");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generatorMarkdown({ ...data }));
  });
}

// Function call to initialize app
init();
