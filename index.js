const inquirer = require ('inquirer');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const fs = require ('fs');
const path = require ('path');
const renderTeam = require('./src/template.js')
const OUTPUTDIR = path.resolve(__dirname, 'output');
const outpath = path.join(OUTPUTDIR, 'index.html')
const team = []

 
//Manager Model
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'Manager name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'ID number?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'Manager email address?'
        },
        {
            type: 'text',
            name: 'PhoneNumber',
            message: 'phone number?'
        }
    ]).then( answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager)
        promptChoice();      
    })
};

//Employee Model
const promptChoice = () => {
    return inquirer.prompt(
    {
        type: 'list',
        name: 'member',
        message: 'Do you want to add another team member?',
        choices: ['Engineer', 'Intern', "No"]
    })
    .then(choose => {
        switch (choose.member) {
         case 'Engineer':
           //engineer prompt function
           promptEngineer();
         break;
     
         case 'Intern':
          //intern prompt function
          promptIntern();
         break;

         case "No":
          //build the team function that executes the html
          console.log(team);
         
          buildTeam(team); 
     };

    });
};

//Engineer Model
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "Engineer's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "Engineer's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "Engineer's email?"
        },
        {
            type:'text',
            name:'github',
            message: "Engineer's github username?"
        }
    ]).then( answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        promptChoice();      
    });
};

// prompting the intern questions when adding an intern employee
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "Intern's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "Intern's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "Intern's email?"
        },
        {
            type:'text',
            name:'school',
            message: "Intern's School?"
        }
    ]).then( answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        promptChoice();      
    });
};

//writing a file using the data presented and putting it in a new directory
function writeToFile(data){
    if(!fs.existsSync(OUTPUTDIR)){
        fs.mkdirSync(OUTPUTDIR)
    }
    return fs.writeFileSync(outpath, data)
}

//generating the HTML file using the renderTeam template and data in the team object
function buildTeam(team){
   writeToFile(renderTeam(team))
}

promptManager();