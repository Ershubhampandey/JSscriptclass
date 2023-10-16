const a = 10;
const b = 20;
const total = 30;

let getRejectedPromise = new Promise(function (resolve, reject) {
    if (a === b) {
    resolve(`Yes, ${a} is equal to ${b}`);
    } else {
    reject(`No, ${a} is not equal to ${b}`);
    }
   });
   console.log(getRejectedPromise);
   // Promise {<rejected>: 'No, 10 is not equal to 20'}