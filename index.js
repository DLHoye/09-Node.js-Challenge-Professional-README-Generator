const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a project description.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the instructions for installation? Enter instructions on how to get the environment running.",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide Usage Information.",
  },
  {
    type: "input",
    name: "licenses",
    message: "Which licenses are you using?",
  },
  {
    type: "input",
    name: "contributions",
    message: "Who contributed to the application?",
  },
  {
    type: "input",
    name: "tests",
    message: "List some tests for your application.",
  },
  {
    type: "input",
    name: "username",
    message: "What is your Github username? (Required)",
  },
  {
    type: "input",
    message: "Email address?",
    name: "email",
  },
];

// This function will write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("README created")
  );
}

// This function will initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    const data = generateMarkdown(response);
    writeToFile("README-generated.md", data);
  });
}

// Call to initialize app
init();
