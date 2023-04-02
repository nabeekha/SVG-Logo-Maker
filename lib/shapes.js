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
class Circle extends Shape {
    //function to return the circle values
    renderCircle(){
        return `<circle cx="25" cy="75" r="20" fill=${this.color} />`

    }

}
