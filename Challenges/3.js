/*
CHALLENGE: Create a function that takes an integer 
as an argument and returns "Even" for even
numbers or "Odd" for odd numbers.
*/

//solution
function evenOrOdd(number) {
    if (number % 2 === 0){ //% modulo used to check for even/odd
    return "Even";
    } 
    return "Odd";
    }
    console.log(evenOrOdd(2))