// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");

const fs = require("fs");
// const prompt = inquirer.createPromptModule();

const readmeTemplate = require("./utils/readme-template");
const { rejects } = require("assert");
const { resolve } = require("path");

// TODO: Create an array of questions for user input
const questionsArr = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?: ",
  },
  {
    type: "input",
    name: "descriptionTitle",
    message: "How would you like to title the description?: ",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a brief description of the project: ",
  },
  {
    type: "input",
    name: "packages",
    message: "What packages are required to install and run this program?: ",
  },
  {
    type: "input",
    name: "installProcess",
    message: "Please describe the install process for this program: ",
  },
  {
    type: "input",
    name: "useCase",
    message: "Describe a use case(s) where this project would be helpful: ",
  },
  {
    type: "checkbox",
    name: "license",
    message: "What license(s) does this project fall under?: ",
    choices: [
      "MIT",
      "GPLv2",
      "GPLv3",
      "Apache",
      "BSD 3-clause",
      "BSD 2-clause",
      "LGPLv3",
      "AGPLv3",
      "Unlicense",
      "Other",
    ],
  },
  {
    type: "input",
    name: "contributorName",
    message: "Enter any Github contributor user names: ",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`../Develop/utils/${fileName}`, data, (err)=> {
    if(err){
      return console.log(err)
    }
    console.log('File created')
  })
  };


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questionsArr).then(function(answers) {
    const readmeString = readmeTemplate(answers);
    // console.log(readmeString);

    writeToFile("README.md", readmeString);
  })
}

// Function call to initialize app
init();
