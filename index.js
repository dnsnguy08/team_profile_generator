// Include packages needed for this application
const Manager = require("./utils/Manager");
const Engineer = require("./utils/Engineer");
const Intern = require("./utils/Intern");
const inquirer = require('inquirer');
const fs = require("fs");

const displayTeam = require("./utils/generateHtml");

const team = [];

// An array of questions for manager input
const questions = [
    {
        message: "Enter the Manager's name:",
        name: "managerName",
        type: "input",
    },
    {
        message: "Enter Manager's employee ID:",
        name: "managerId",
        type: "input",
    },
    {
        message: "Enter Manager's email address:",
        name: "managerEmail",
        type: "input",
    },
    {
        message: "Enter the office number:",
        name: "officeNumber",
        type: "input",
    },
];

// function to call manager questions
function manager() {
    inquirer
    .prompt(questions)
    .then(data => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
        team.push(manager);
        addTeam();
    })
}

// function to for adding a team member or exiting the prompts
function addTeam() {
    inquirer
    .prompt([
        {
            message: "Select your team member role:",
            name: "teamRole",
            type: "list",
            choices: [
                "Engineer",
                "Intern",
                "I am done adding team members.",
            ]
        }
    ]).then(function(data){
        if (data.teamRole === "Engineer") {
            addEngineer();
        } else if (data.teamRole === "Intern") {
            addIntern();
        } else {
            createTeam();
        }
    })
}

// function for adding an engineer role
function addEngineer() {
    inquirer
    .prompt([ 
        {
            message: "What is the Engineer's name?",
            name: "engineerName",
            type: "input"

        },
        {
            message: "What is the Engineer's Employee ID?",
            name: "engineerId",
            type: "input"

        },
        {
            message: "What is the Engineer's email?",
            name: "engineerEmail",
            type: "input"

        },
        {
            message: "What is the Engineer's GitHub username?",
            name: "engineerGithub",
            type: "input"

        }
    ]) .then(function(data) {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
        team.push(engineer);
        addTeam();
      })
}

// function for adding an intern role
function addIntern() {
    inquirer
    .prompt([ 
        {
            message: "What is the Intern's name?",
            name: "internName",
            type: "input"

        },
        {
            message: "What is the Intern's Employee ID?",
            name: "internId",
            type: "input"

        },
        {
            message: "What is the Intern's email?",
            name: "internEmail",
            type: "input"

        },
        {
            message: "What is the Intern's school?",
            name: "internSchool",
            type: "input"

        }
    ]) .then(function(data) {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        team.push(intern);
        addTeam();
      })
}

function createTeam() {
    fs.writeFile("index.html", displayTeam(team), function(err) {
        if (err) {
            console.log(err);       
        }
    });
}

// start program by asking the manager questions
manager();
