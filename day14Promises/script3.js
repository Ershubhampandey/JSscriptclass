const myPromise = new Promise(function (resolve, reject) {
    resolve(Promise.resolve("Test resolve"));
    resolve(Promise.resolve("Test resolve 2"));
    resolve(Promise.resolve("Test resolve 3"));
    });
    myPromise.then(
     (value) => {
     console.log("Promise fulfilled with value", value);
     // Promise fulfilled with value Test resolve
     },
     (error) => {
     console.log("Promise rejected and the error is", error);
     }
    );
    // It can be seen that the subsequent resolutions of the Promise are silently 
    // ignored. This guarantee is provided by javascript that a Promise will is 
    // resolved only onc