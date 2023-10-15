// The Argument Object

function add2() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    }
    return sum;
   }
   console.log(add2(1, 2)); // 3
   console.log(add2(1, 2, 3, 4, 5)); // 15