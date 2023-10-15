//Write a function to calculate simple interest based on the principle amount Function

function simpleInterest(principle, rate, time){
    var finalAmt = principle + principle*time*rate;
    return finalAmt;
}
console.log(simpleInterest(20000, 5, 2));
console.log(simpleInterest(40000, 6 , 7));