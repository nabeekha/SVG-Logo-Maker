//intial variable declaration
const inquirer = require('inquirer')
const fs = require('fs')
const { circle, triangle, square } = require('./lib/shapes')

//declaring first shape arraay
const shapes = ['circle', 'triangle', 'square']

//writing questions
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
    const shapeType = data['shape']
    const shapeColor = data['shape-color']
    const filename = data['filename']

    //add create svg document
    const svg = createsSVGDocument()
    
    //add text to the SVG
    addTextToSVG(svg, text, textColor)

    //add the chosen shape to the SVG
    addShapetoSVG(svg, shapeType, shapeColor)
   
    //saving the SVG to a file
    saveSVGToFile(svg, filename)

    console.log(`Generated logo to ${filename}.svg`)
})
}

function createsSVGDocument(){
    return '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' +
    '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">\n' +
    '</svg>\n'
}

function addTextToSVG(svg, text, color){
    const svgArray = svg.split('\n')
    svgArray.splice(2, 0, ` <text x="50" y="100" font-size="48" fill="${color}">${text}</text>\n`)
    const newSVG = svgArray.join('\n')
    return newSVG
}

function addShapetoSVG(svg, shapeType, color){
    let shape

    switch (shapeType) {
    case 'circle':
      shape = new circle();
      break;
    case 'triangle':
      shape = new triangle();
      break;
    case 'square':
      shape = new square();
      break;
    default:
      console.error('Invalid shape:', shapeType);
      process.exit(1);
    }

    shape.pickColor(color)
    const svgArray = svg.split('\n')
    svgArray.splice(-2, 0, ` ${shape['render' + shapeType.charAt(0).toUpperCase() + shapeType.slice(1)]()}\n`)
    const newSVG = svgArray.join('\n')
    return newSVG
}

function saveSVGToFile(svg, filename) {
    fs.writeFileSync(`${filename}.svg`, svg)
}

askQuestions()
