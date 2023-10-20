class Car {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(x){
        return x - this.year;   // x is has taken current year and year has taken whic i given
    }
}
let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Food", 2014);
console.log(myCar.age(year));