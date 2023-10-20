//field declaration .1-public field 2-private filed

// class Rectangle{
//     height = 0;
//     width;
//     constructor(height,width){
//         this.height = height;
//         this.width = width;
//     }
// }
// area = new Rectangle(10,20)

// res =area.height+area.width
// console.log(res)


class Rectangle{            //private value should be used in the class not a out of class 
    #height;
    #width;
    constructor(height, width){
        this.#height = height;
        this.#width = width;
    }
}
area = new Rectangle(10,20)
res = area.height+area.width
console.log(res)