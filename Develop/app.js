const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");



let employees = [];

// Questions  Manager 
let questionsManager = [
    {   
        type: "input",
        name:"name",
        message: "What is the manager's name?",
    },

    {
        typ: "input",
        name: "id",
        message: "What is the manager's ID number?"
    },

    {   
        type: "input",
        name:"email",
        message: "What is the manager's email?",
    },

    {   
        type: "input",
        name:"officeNumber",
        message: "What is the manager's office number?",
    },

    {
        type: "list",
        name: "teamMember",
        message: "What type of employee would you like to add next?",
        choices: [
            "Engineer",
            "Intern",
            "I do not want to add any more team members",
        ]
    }
]
// questions engineer
let questionsEngineer = [
    {   
        type: "input",
        name:"name",
        message: "What is the engineer's name?",
    },

    {
        typ: "input",
        name: "id",
        message: "What is the engineer's ID number?"
    },

    {   
        type: "input",
        name:"email",
        message: "What is the engineer's email?",
    },

    {   
        type: "input",
        name:"github",
        message: "What is the engineer's GitHub Username?",
    },

    {
        type: "list",
        name: "teamMember",
        message: "What type of employee would you like to add next?",
        choices: [
            "Engineer",
            "Intern",
            "I do not want to add any more team members",
        ]
    }
]
// questions Intern 
let questionsIntern = [
    {   
        type: "input",
        name:"name",
        message: "What is the intern's name?",
    },

    {
        typ: "input",
        name: "id",
        message: "What is the intern's ID number?"
    },

    {   
        type: "input",
        name:"email",
        message: "What is the intern's email?",
    },

    {   
        type: "input",
        name:"school",
        message: "What school is the intern from?",
    },

    {
        type: "list",
        name: "teamMember",
        message: "What type of employee will be added next?",
        choices: [
            "Engineer",
            "Intern",
            "I do not want to add any more team members",


        ]
    }
]

// prompt via inquirer for



let inquirerPrompt = (questions,employeeType) =>{
    inquirer
// checks for employee type, then asks questions based on type
    .prompt(questions)
 

    // checking answers here 
    .then(answers => {
        let member = "";
        
        if(employeeType === "Manager"){

            let {name,id,email,officeNumber,teamMember} = answers
            let newTeamMember = new Manager(name,id,email,officeNumber);
            member=teamMember
            employees.push(newTeamMember);

        }else if(employeeType === "Engineer"){

            let {name,id,email,github,teamMember} = answers;
            let newTeamMember = new Engineer(name,id,email,github);
            member=teamMember
            employees.push(newTeamMember);

        }else if(employeeType === "Intern"){

            let {name,id,email,school,teamMember} = answers;
            let newTeamMember = new Intern(name,id,email,school);
            member=teamMember
            employees.push(newTeamMember);
        }
        // checks type, then prompts questions



        if(member === "Engineer"){

            inquirerPrompt(questionsEngineer,"Engineer");
        }else if(member === "Intern"){
            
            inquirerPrompt(questionsIntern,"Intern");
        }else if(member === "I do not want to add any more team members"){

    // writes HTML file
            fs.writeFile(outputPath, render(employees), (err)=> {
                if (err) throw err;})
            console.log("Your Team website has been generated!")
        }
    })
    .catch(error => {

        if(error){
            console.log(error)
        }
    });
};

// initially runs to ask user to add a manager
inquirerPrompt(questionsManager,"Manager");