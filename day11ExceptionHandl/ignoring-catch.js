//The following example defines the add() function that returns the sum of two

arguments:

const add = (x, y) => x + y;
try {
 let result = add(10, 20);
 console.log(result);
} catch (e) {
 console.log({ name: e.name, message: e.message });
}
console.log('Bye')