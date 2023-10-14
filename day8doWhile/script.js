//print number seriese

// for(i=1; i<=5;i++)
// console.log(i)

// let i=1
// while(i<=5){
//     console.log(i)
//     i++
// }


//display the odd number

// let i=1
// while(i<=10){
//     console.log(i)
//     i=i+2 //incriment
// }

//display the even number
// let i=0
// while(i<=10){
//     console.log(i)
//     i=i+2
// }


// let i=10      //in do-while loop first body then  condition
// do{
//     console.log(i)
//     i++
// }while(i<=20)


// let count =1;
// while(count<10){
//     console.log(count)
//     count +=2;
// }



//  let count =0;
//  do{
//     console.log(count)
//     count++;
//  }while(count<5)


//  find the power of a number
 const prompt=require('prompt-sync')()
 a=parseInt(prompt("Enter your basse value : "))
 n=parseInt(prompt("Enter your exponent value : "))
 let i=1
 let result=1;
 while(i<=n){
   result = result*a
   i++;
 }
 console.log(result)


//find no of digit

// const prompt=require('prompt-sync')()
// num=parseInt(prompt("Enter the number : "))
// let count=0;
// while(num>0){
//    rem=num%10  //come to reminder
//    num=parseInt(num/10)  //not take floating num i get integer number
//    count++;
// }
// console.log(count)
