// WAP to find factorial a given number n
function factorial(n) {
    // invalid case
    if (n < 0) {
    return 'Factorial of negative number is not possible';
    }
    // base case
    else if (n === 1 || n === 0) {
    return 1;
    }
    return n * factorial(n - 1);
   }
   console.log(factorial(5)); // Output?
   console.log(factorial(-2)); // Output