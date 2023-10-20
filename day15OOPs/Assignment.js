class pet{
    constructor(name, age){
        this.name = name;
        this.age =  age;
    }
    print(){
        return " I have a pet Its name is " + this.name + " Its age is" + this.age + " year old"
    }
}
class Dog extends pet{
    constructor(name, age, breed){
    super(name, age)
    this.breed = breed;
    }
    show(){
        return "I have a pet. Itss name is " + this.name + "Its" + this.age + "years old. It is a dog and its breed is" + this.breed
    }
}
const d = new Dog ("abdul", 12 , "doberman")
console.log(d.show());