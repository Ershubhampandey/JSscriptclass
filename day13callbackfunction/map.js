//Multiplying each item from the array with 2 :-

const arr = [1, 3, 5, 9];
const newArr = arr.map(myFunction)
const myFunction = (num) => {
 return num * 2;
}
console.log(newArr);
// [2, 6, 10, 18]