//The following example illustrates how to use the try...catch...finally statement:

let result = 0; //add is not defined
// let add = (x,y) => x + y;
try {
 result = add(10, 20);
} catch (e) {
 console.log(e.message);
} finally {
 console.log({ result });
}
