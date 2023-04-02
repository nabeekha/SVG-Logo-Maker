const inquirer = require('inquirer')
const fs = require('fs')
const SVG = require('svg.js')

const shapes = ['circle', 'triangle', 'square']

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
    choices: shapes,
},
{
    type: 'input',
    name: 'shape-color',
    message: 'Please enter a color name or hex value for the text',
}
])
.then((data) => {
    const text = data['text']
    const textColor = data['text-color']
    const shape = data['shape']
    const shapeColor = data['shape-color']
    const filename = data['filename']

    //create a new SVG document
    const svg = SVG().size(300, 200)

    //add text to the file
    svg.text(text).fill(textColor).move(50,100)

    //add shapes
    switch (shape){
        case 'circle':
            svg.circle(50).fill(shapeColor).move(200, 100);
            break;
          case 'triangle':
            svg.polygon('0,50 50,0 100,50').fill(shapeColor).move(175, 75);
            break;
          case 'square':
            svg.rect(50, 50).fill(shapeColor).move(175, 75);
            break;
          default:
            console.error('Invalid shape:', shape);
            process.exit(1); 
    }

    //saving the SVG to a file
    fs.writeFileSync(`${filename}.svg`, svg.svg())

    console.log(`Logo saved to ${filename}.svg`)
})


}

askQuestions()
