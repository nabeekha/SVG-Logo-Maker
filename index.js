const inquirer = require('inquirer')
const fs = require('fs')

function askQuestions(){
inquirer 
    .prompt([
{
    type: 'input',
    name: 'text',
    message: 'Please enter up to 3 characters',
}, 
{
    type: 'input', 
    name: 'color',
    message: 'please enter a color name or hex value',
},
])
.then((data) => {
    console.log(data)
    
})

}

askQuestions()