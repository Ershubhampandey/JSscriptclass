//Write functions to demonstrate resolved and rejected states of a Promise.

const a = 10;
const b = 20;
const total = 30;
let getFulfilledPromise = new Promise(function (resolve, reject) {
 if (a + b === total) {
 resolve(`Yes, ${a} + ${b} is equal to ${total}`);
 } else {
 reject(`No, ${a} + ${b} is not equal to ${total}`);
 }
});
console.log(getFulfilledPromise);
// Promise {<fulfilled>: 'Yes, 10 + 20 is equal to 30'}


