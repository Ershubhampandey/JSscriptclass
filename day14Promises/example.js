//promise is fulfilled when the promise is resolved with the given value.

const count = true;
let countValue = new Promise(function (resolve, reject) {
 if (count) {
 resolve("There is a count value.");
 } else {
 reject("There is no count value");
 }
});
console.log(countValue);
// Promise {<fulfilled>: 'There is a count value.'}
