/*
CHALLENGE: In this kata you will create a function that takes a 
list of non-negative integers and strings and returns a
new list with the strings filtered out.
*/

// Based on the requirements, I knew I wanted to use the filter() method 
// and typeof operator to detect for a "number"

//solution
function filter_list(l) {
    return l.filter(item => typeof item === 'number');
}

/*
the "typeof" operator can check for a number of data types
such as Number, boolean, string, so I knew I wanted to 
use it 
*/
// without short syntax, it'd be

function filter_list(l) {
    return l.filter(function(item){
        return typeof item === "number";
    })
}


