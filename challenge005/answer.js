

function sort_object_list_by_name(list) {
    var first, second;
    for (var i=0; i<list.length-1; i++) {
        if (list[i].name > list[i+1].name) {
            first = list[i+1];
            second = list[i];
            list[i] = first;
            list[i+1] = second;
        }
    }
    console.log(list);
    return list;
}