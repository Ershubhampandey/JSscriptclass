//When both the variables are different, the promise is rejected and prints an error message.

let promise = new Promise(function(resolve, reject) {
    const a = "helloworld"
    const b = "primathonacademy"
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
    // "Some error has occurre