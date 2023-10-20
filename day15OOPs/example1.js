class Car{
    constructor(brand){
        this.brand = brand;
    }
    present(){
        return 'I have a' + this.brand;
    }
}
class Model extends Car{
    constructor(brand, mod){
        super(brand);
        this.Model = mod;
    }
    show(){
        return this.present() +', it is a ' + this.Model;
    }
}
let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());