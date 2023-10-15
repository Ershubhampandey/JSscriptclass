function sayHiAdvance(name,age){
    console.log('Hi',name,'you are', age, 'years old');
}
sayHiAdvance();
sayHiAdvance(23);
sayHiAdvance(23,'Primathon');
sayHiAdvance('Primathon', 23);
const temp = sayHiAdvance('Primathon', 23);
console.log(temp);