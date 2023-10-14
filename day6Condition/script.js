// let price = 100

// if(price>50)
// console.log("Congratulation 1")
// console.log("Congratulation 2")
// console.log("Congratulation 3")


// let price = 100

// if(price>50)
// {
// console.log("Congratulation 1")
// console.log("Congratulation 2")
// console.log("Congratulation 3") 
// }   //only 2 and 3 is printed


// let price=100

// if(price>500){
// console.log("Congratulation 1")
// console.log("Congratulation 2")
// console.log("Congratulation 2")
// }
// else
// console.log("Congratulation 2")


// let's discuss

// let score=85

// if(score>=70){
//     console.log("A" )
// }
// if(score<90 && score >=80)
// {
//     console.log("B" )

// }
// if(score <80 && score>=70){
//     console.log("C" )
// }
// else{
// console.log("number value is so high")
// }



// let a =1;
// switch (a){
//     case 1:
//         {
//             a ='one';
//             console.log(`The value is ${a}`)
//             // break;
//         }
//         case 2:
//         {
//             a='two';
//             console.log(`The value is ${a}`);
//             break;
//         }
//         default:
//             {
//                 a= 'not found';
//                 console.log(`The value is ${a}`);
//                 // break;
//             }
// }




// let day = 2;
// switch (day){
//     case 1:{
//         console.log("Sunday");
//         break;
//     }
//     case 2:{
//         console.log("Monday");
//         break;
//     }
//     case 3:{
//         console.log("Tuesday");
//         break;
//     }
//     case 4:{
//         console.log("Wednesday");
//         break;
//     }
//     case 5:{
//         console.log("Tuesday");
//         break;
//     }
//     case 6:{
//         console.log("Friday");
//         break;
//     }
//     case 7:{
//         console.log("Saturday");
//         break;
//     }

// }




// let x=5;
// if (x === 5){
//     let a = x;
//     console.log(a);
// }
// console.log(x);


// const number = 6;
// const result = number % 2; // 2 
// console.log(`number is even ${result}`)



// program to check if the number is even or odd
// take input from the user

const prompt=require('prompt-sync')()
number=parseInt(prompt("Enter a number : "))
// let number=17;
//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}