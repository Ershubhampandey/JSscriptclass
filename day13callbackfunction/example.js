//Callback function

// function printAcademyName () {
//     console. Log( 'Primathon Academy');
//     }
//     function greet (message) {
//     console.log( "Message here:" + message);
//     }
//     setTimeout (printAcademyName, 2000);
//     greet ('Hello World');



function printAcademyName(message, myFunction) {
    console.log("Primathon Academy");
    myFunction(message);
    }
    function greet(message) {
    console. Log( "Message here: "+ " " + message);
    }
    setTimeout (printAcademyName, 2000, 'Hello World', greet);