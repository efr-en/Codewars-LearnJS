/*
CHALLENGE: This kata is about multiplying a given
number by eight if it is an even number and 
by nine otherwise.
*/

/* 
From reading the problem I knew I wanted to use an if else statement 
since it' s asking for 2 conditionals only
*/

//solution
function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    } else {
      return number *9;
    }
}

/*
If I wanted to make this code simpler
I could adjust it without using "else" as below

function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    } 
      return number *9;
}
*/