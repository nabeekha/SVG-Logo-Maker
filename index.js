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
    name: 'text-color',
    message: 'Please enter a color name or hex value for the text',
},
{
    type: 'list',
    name: 'shape',
    message: 'Please select from a list of shapes: circle, triangle and square',
    choices: ['circle', 'triangle', 'square'],
},
{
    type: 'input',
    name: 'shape-color',
    message: 'Please enter a color name or hex value for the text',
}
])
.then((data) => {
    console.log(data)
    
})

}

askQuestions()