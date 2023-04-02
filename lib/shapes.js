class Shape {
    constructor(){

    this.color = ''
    }

    pickColor(color){
        //function created to pick a color

        //setting the color to the selected value
        this.color = color
    }
}

//create separate class for each shape
class circle extends Shape {
    //function to return the circle values
    renderCircle(){
        return `<circle cx="25" cy="75" r="20" fill=${this.color} />`

    }

}

//class for triangle
class triangle extends Shape {
    //function to return the circle values
    renderTriangle(){
        return `<polygon points="20,80 50,20 80,80" fill=${this.color} />`
    }
}

//class for square
class square extends Shape {
    //function to return the circle values
    renderSquare(){
        return `<rect x="10" y="60" width="40" height="40" fill=${this.color} />`
    }
}

module.exports = {Shape, circle, triangle, square}