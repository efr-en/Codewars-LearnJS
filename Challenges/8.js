/* 
CHALLENGE: Create a function which answers the question 
"Are you playing banjo?".
If your name starts with the letter "R" or 
lower case "r", you are playing banjo!

The function takes a name as its only argument, 
and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

//1st attempt 
function areYouPlayingBanjo(name) {
    if (name.includes("R" || "r", 0)) {
    return name + " plays banjo";
    } 
    return name + " does not play banjo";
}

/*
I had tried using .includes() to check for 2 values such as
("Rr") or ("R, r"). After no luck, I decided to search 
whether or not it was possible with 2 values, unforunately 
it only checks for one so I decided to change 
my if to an if else if statement 
*/

//2nd attempt
function areYouPlayingBanjo(name) {
    if (name.includes("R", 0)) {
    return name + " plays banjo";
    } else if (name.includes("r", 0)) {
        return name + " plays banjo";
    }
    return name + " does not play banjo";
}

/*
After submission, I realized it would pass any name 
that contained an R/r regardless, so I decided to 
specify the element index to be the first position with [0]
*/

// 3rd solution
function areYouPlayingBanjo(name) {
    if (name[0].includes("R", 0)) {
    return name + " plays banjo";
    } else if (name[0].includes("r", 0)) {
        return name + " plays banjo";
    }
    return name + " does not play banjo";
}

// If I followed my first idea , I could've used 
// if (name[0] == 'R' || name[0] == 'r') - codewars solutions