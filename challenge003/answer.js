function matrix_add(array1, array2) {
    var len = array1.length,
        sub_array = [],
        master_array;
    for (var i=0; i<len; i++) {
        for (var j=0; j<array1[i].length; j++) {
             var new_num = array2[i][j] + array2[i][j];
                 sub_array.push(new_num);
                 if (sub_array.length == 3) {
                     master_array.push(sub_array);
                     sub_array = [];
                 }
        }
    }
    return master_array;
}