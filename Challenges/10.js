/*
CHALLENGE: Complete the function so that it finds the average 
of the three scores passed to it and returns the letter
value associated with that grade.
Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no 
need to check for negative values or values greater than 100.

this is the base function given below

function getGrade (s1, s2, s3) {
}

I decided i'd first create a variable to assign the average score to
and use that in my function
*/

//solution
function getGrade (s1, s2, s3) {
    let averageScore = (s1, s2, s3) / 3;
    if (averageScore >= 90 && averageScore <= 100) {
        return 'A';
    } else if (averageScore >= 80) {
        return 'B';
    } else if (averageScore >= 70) {
        return 'C'; 
    } else if (averageScore >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

/* 
Cham told me I could make this code more readable and easier to 
type using switch cases 
*/

// switch (){
//     case ;
//         //code
//     break;
//     default 
// }

//this one was a bit tricky, on my 1st couple attempts I was
//unnecessarily strict, with all conditionals being along the 
// format of (else if (averageScore >= 60) && (averageScore < 70))