/*
CHALLENGE: Write a function which calculates the average 
of the numbers in a given array.
Note: Empty arrays should return 0.
*/

//solution
function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log(findAverage([1, 2, 3, 5, 8]));