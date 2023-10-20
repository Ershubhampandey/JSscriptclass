//class expression

let Rectangle = class{                //class expression without name
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle.name); // Rectangle

Rectangle = class Rectangle2{            //class expression with name
    constructor(height,width){
        this.height = height;
        this.widht = width;
    }
};
console.log(Rectangle.name);