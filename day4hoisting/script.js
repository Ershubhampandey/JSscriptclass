// let a = 10;

// console.log(a)    //run on the browser

// document.getElementById('demo').innerHTML=a


// let a = 10, b =12, c ="ram";

// console.log(a, b, c)

// var x = 10; //here x is 10
// {
//     var x = 2;
//     //here x is 2
// }
// console.log(x) //here x is 2

// const cars=["a", "b", "c"]
// //const cars=["d", "e", "f"]we can not redeclared 
// cars[0]="d"   //but take int value to change value
// console.log(cars)

// catName("Tiger");
// function catName(name){
//     console.log(`My cats name is ${name}`);
// }


// greet();

// function greet(){
//     console.log(`Hi, there.`)
// }

// function iAmAFunction() {
//     var iAmTwo = 2;
//     if (iAmTwo == 2) {
//      var iAmThree = 3;
//      let iAmFour = 4;
//     }
//     //  console.log(iAmThree); // 3
//     console.log(iAmFour); // error
//      }
//      iAmAFunction();


// var greeter = "hey hi";
// var times = 4;
// if (times > 3) {
//  var greeter = "say Hello instead";
// }
// console.log(greeter) // "say Hello instead"



// var a = 10;
// {
//  var a = -10;
// }
// let b = a;
// {
//  let b = -20;
// }
// console.log(b)



// for(var i=0;i<3;i++){
//     console.log(i)
//     }
//     console.log("i outside the loop: ", i);
//     for(let j=0;j<3;j++){
//     console.log(j);
//     }
//     console.log("j outside the loop :", j);


// console.log(y);
// y = 1;     //y is not defiend


// onsole.log(y);
// var y = 2;     //ReferencError: onsole is not defined


// y = 3;
// console.log(y);
// var y;   //3


// var a = 1;
// console.log(a);
// var a = 2;
// console.log(a);   //1 2


// console.log(z);
// let z = 1;


// function hoistExample() {
//     var a;
//     console.log("Before: ", a); 
//     a = 10; 
//     console.log("After: ", a);
// }
// hoistExample();  //10


// function hoistingExample() { 
//     console.log("Value of a in local scope: ", a);
//    }
//    var a = 1;
//    console.log("Value of a in global scope: ", a);
   
//    hoistingExample();


// function hoistingExample() { 
//     a = 1;
//    }
//    hoistingExample();
//    console.log(a)  // 2 2


// alert(a());
// function a() {
//  var b = function() {
//  return 3;
//  };
//  return b();
//  var b = function() {
//  return 8;
//  };
// }


// alert(a());
// function a() {
//  function b() {
//  return 3;
//  }
//  return b();
//  function b() {
//  return 8;
//  }
// }



// function foo(n) { 
// //     if (n == 6) {
// //     let num = 2;
// //     }
// //     console.log(num);
// //    }
//    var n = 6;
//    console.log(n);
//    foo(6);
   
// function foo(){
//     var n=6;
//     console.log(n);
//    }
//    var n=5;
//    console.log(n);
//    foo();


// function parent() {
//     var hoisted = "I'm a variable";
//     function hoisted() {
//      return "I'm a function";
//      }
//     return hoisted();
//     }
//     console.log(parent());


// al




// var myVar = "foo";
// (function () {
// console.log("Original value was: " + myVar);
// var myVar = "bar";
// console.log("New value is: " + myVar);
// })();


// mediaum assignment


// var fruit = 'apple'

// {
//   var fruit = 'orange'
//   console.log(fruit)
// }

// console.log(fruit) 
// console.log(fruit)    //orange orange


// var fruit = 'apple'

// function gimmeFruit() {
//   var fruit = 'orange'
//   console.log(fruit) // ??
// }

// console.log(fruit) // ??
// gimmeFruit()


// var fruit = 'apple'
// var fruit = 'orange' 
// console.log(fruit)


// console.log(bar)   //undefined
// var bar = 111
// console.log(bar)  //111

// const fruit = 'apple'

// {
//   const fruit = 'orange'
//   console.log(fruit)   //orange
// }

// console.log(fruit) //applle



