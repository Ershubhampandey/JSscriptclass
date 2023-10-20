class Animal{
    constructor (name) {
        this.name = name;
    }

    speak(){
        console.log(`${this.name}makes a noise.`)
    }
}
class Dog extends Animal{
    constructor(name){
        super(name); //call the super class construtor and pass  in the name paameter
    }
    speak(){
        console.log(`${this.name} break.`)
    }
}
const d = new Animal('Mitzie');
d.speak();