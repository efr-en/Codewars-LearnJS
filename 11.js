/*
CHALLENGE: Create a function that returns the sum of 
the two lowest positive numbers given an array of 
minimum 4 positive integers. No floats or non-positive 
integers will be passed.

For example, when an array is passed like 
[19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

/*
After brainstorming for a while and thinking there'd be a method to do 
all the heavy work, I remembered since the problem is asking
for the 2 LEAST integers, I could use .sort() to sort them from 
least to greatest and then add the first array elements together
*/

// solution
function sumTwoSmallestNumbers(numbers) {  
    const sum = numbers.sort((a, b) => a-b);
    return sum[0] + sum[1];
}