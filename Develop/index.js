// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const prompt = inquirer.createPromptModule();

// TODO: Create an array of questions for user input
const questionsArr = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?: ",
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
    type: "confirm",
    name: "morePacks",
    message: "Would you like to enter another required package?: ",
    default: false,
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
    type: "confirm",
    name: "contributorsBoo",
    message: "Would you like to cite any contributors to this project?: ",
    default: false,
  },
  {
    type: "input",
    name: "contributorName",
    message: "Enter the Github name of the contributor: ",
  },
  {
    type: "confirm",
    name: "contributorPlusBoo",
    message: "Would you like to add another contributor?: ",
    default: false,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  prompt(questionsArr).then(function (answers) {
    console.log(answers);
  });
}

// Function call to initialize app
init();