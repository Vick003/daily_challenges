/*
var needle = ['dog','lizard','flower','monkey','unicorn']
var haystack = ['cat','dog','bird','turtle','lizard'];
var output = null;

output = search_array(haystack,needle);
console.log(output); //outputs ['dog','lizard'];
*/


// Using Nested for loops approach
function search_array(needle, haystack) {
    var common_list = [];
    for (var i=0; i<needle.length; i++) {
        for (var j=0; j<haystack.length; j++) {
            if (needle[i] == haystack[j]) {
                common_list.push(needle[i]);
            }
        }
    }
    return common_list;
}


//Using indexOf method 

function search_array(needle, haystack) {
    var common_list = [];
    for (var i=0; i<needle.length; i++) {
        //check if word is found in haystack
        if(haystack.indexOf(needle[i]) != -1) {
            common_list.push(needle[i]);
        }
    }
    return common_list;
}

