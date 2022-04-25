// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

// TODO: Create an array of questions for user input
const questionsArr = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?: ",
    default: "Generic Name",
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
