// here we have access to the handlePayment function providedby the payment gateway
const handlePayment = (callback) => {
// ideally the callback should have been called
// callback()
};
// our code
const paymentInfo = new Promise((resolve, reject) => {
handlePayment (resolve);
});
const timeoutPromise = (delay) =>
new Promise((resolve, reject) => {
 setTimeout (() => {
 reject("Time out error" );
 }, delay);
 });
Promise.race([paymentInfo , timeoutPromise (3000)]).then(
 (value) => {
 console.log("resolved with" , value);
 },
 (error) => {
 console.log("The error is " , error);
 // The error is Time out error
 }
);