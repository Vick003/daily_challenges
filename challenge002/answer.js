/* Create a function, add_arrays(), that does the following 

Takes an input, 2 arrays of equal size:
 - first array is an array of numbers
 - needle array, an array of numbers
 
 Output: output array, which has all values from the first array added to the
 values from the second array: 

e.g., var first_array =  [3,-5,15,4]; var second_array =  [3,18,-5,-4];
output = add_arrays(first_array,second_array); console.log(output); //outputs [6,13,10,0];

*/

function add_arrays(first_array, needle_array) {
    var len = first_array.length,
        new_num;
    for (var i=0; i<len; i++) {
        new_num = first_array[i] + needle_array[i];
        needle_array[i] = new_num;
    }
    return needle_array;
}

