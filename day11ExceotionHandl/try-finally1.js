//In the following example, we define the add() function and call it in the try

const add = (x, y) => x + y;
let result = 0;
try {
 result = add(10, 20);
} catch (e) {
 console.log(e.message);
} finally {
 console.log({ result });
}
