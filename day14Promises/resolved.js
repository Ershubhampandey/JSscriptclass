//When both the variables are the same, the promise is resolved and prints a success message.


let promise = new Promise(function(resolve, reject) {
    const a = "primathonacademy";
    const b = "primathonacademy";
    if(a === b) {
    resolve();
    } else {
    reject();
    }
    });
    promise.
    then(function () {
    console.log('Success, Welcome to Primathon Academy');
    }).
    catch(function () {
    console.log('Some error has occurred');
    });
    // "Success, Welcome to Primathon Academy"
    