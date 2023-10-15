// Print all factors of a number
// If the number is divided by a variable without any remainder then it will be printed. The 
// recursive call “printFactors(number, fact+1)” ensures every factor between 1 to 
// number/2 is printed


function printFactors(number, fact){
    if(number/fact < 2){
    console.log(number)
    return;
    } 
    if(number%fact == 0){
    console.log(fact);
    }
    return printFactors(number, fact+1);
   }
   function findFactors(number){
    printFactors(number,1);
   }
   findFactors(100);
   