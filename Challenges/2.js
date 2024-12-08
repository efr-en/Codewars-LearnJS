/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're 
better than the average student in your class.

CHALLENGE: You receive an array with your peers' test scores.
Now calculate the average and compare your score!
Return true if you're better, else false!


After reading this question, I decided to create a variable called averageScore,
and assign an expression to find the average to it
from there I could layout the comparison function to either return 
true or false
*/

function betterThanAverage(classPoints, yourPoints) {
    let averageScore = classPoints / classPoints.length;
    if (yourPoints > averageScore) {
        return true
    } else
        return false
}

/*
This above is my first attempt, it passed 3 out of the 5 tests
Then I noticed I forgot to consider this note at the bottom
"Your points are not included in the array of your class's points.
Do not forget them when calculating the average score!"
*/

//correct solution
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
/* EXPLANATION 
classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
this iterates over the array and sums its elements
a is the accumulator, and b is the current array element in the interation
0 is the initial value of a
basically the sum is then divided by the length from classPoints.length to get the average.
*/

/*
Below are attempts I had made when I hadn't realized I was
misinterpreting what the problem was asking.
The whole time I assumed yourPoints was an array of 
my MULTIPLE test scores and not just one score for a test....

function betterThanAverage(classPoints, yourPoints) {
    let totalPoints = ...classPoints,  ...yourPoints;
    let averageScore = totalPoints / totalPoints.length;
      if (yourPoints > averageScore) {
        return true;
      } else
        return false;
  }
-------------------------------------------------------------
  function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    let totalArray = [...classPoints, ...yourPoints];
     totalArray.forEach(function(point) {
      sum += point;
    })
    let averageScore = totalArray / totalArray.length;
      if (yourPoints > averageScore) {
        return true;
      } else
        return false;
  }
-------------------------------------------------------------
function betterThanAverage(classPoints, yourPoints) {
    let totalPoints = [...classPoints, ...yourPoints];
    let sum = 0;
    totalPoints.forEach(function((i) {
    sum += totalPoints[i];
    }
    let averageScore = sum / totalPoints.length;
        if (yourPoints > averageScore) {
        return true
        } else
        return false
})
-------------------------------------------------------------
    function betterThanAverage(classPoints, yourPoints) {
        let totalPoints = [...classPoints, ...yourPoints];
        let sum = 0;
        totalPoints.forEach(function(point) {
        sum += point;
        })
        let averageScore = sum / totalPoints.length;
        if (yourPointsAverage > averageScore) {
            return true
        } else
            return false
        }
-------------------------------------------------------------
function betterThanAverage(classPoints, yourPoints) {
    let totalScores = [...classPoints, ...yourPoints];
    let sum = 0;
    let totalAverage = totalScores.forEach(function(point) {
        return sum += point;
});
    let averageScore = totalAverage / totalScores.length;
        if (yourPoints > totalAverage) {
            return true
            } 
            return false
}
*/

// I now realize just how bad 
// overthinking/misinterpreting can be.....