/*
CHALLENGE: Create a function that gives a personalized greeting. 
This function takes two parameters: name and owner.

Use conditionals to return the proper message:
*/

//solution
function greet (name, owner) {
    if (name === owner) {
        return 'Hello boss';
    } else {
        return 'Hello guest';
    }
}

//another 1st try problem, this felt 
//accomplishing as well