const myPromise = new Promise(function (resolve, reject) {
    reject(Promise.resolve("Test resolve"));
    });
    myPromise.then(
     (value) => {
     console.log("Promise fulfilled with value", value);
     // does not run
     },
     (error) => {
     console.log("Promise rejected and the error is", error);
     // Promise rejected and the error is . . .
     }
    )