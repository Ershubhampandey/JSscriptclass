//applay to delay
function delay(delayBy){
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, delayBy, delayBy);
    });
    }
    delay(3000).then((delayBy) =>{
        console.log(`Delay by ${delayBy}ms`);
    });