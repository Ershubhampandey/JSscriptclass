//1. Using the JavaScript throw statement to throw an exception

//The following example uses the throw statement to throw an exception in a function

function add(x, y) {
    if (typeof x !== 'number') {
    throw 'The first argument must be a number' ;
    }
    if (typeof y !== 'number') {
    throw 'The second argument must be a number' ;
    }
    return x + y;
   }
   const result = add( 'a', 10);
   console.log(result);


//    How it works.
// First, define the add() function that accepts two arguments and returns the sum of them. 
// The add() function uses the typeof operator to check the type of each argument and throws an
// exception if the type is not number.
// Second, call the add() function and pass a string and a number into it.
// Third, show the result to the console.
// The script causes an error because the first argument ("a") is not a number:
// Uncaught The first argument must be a numbe