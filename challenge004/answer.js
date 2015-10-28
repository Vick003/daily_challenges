function find_factors(n) {
    var counter = n,
        list = [];
    while(counter > 0) {
        if(n % counter == 0) {
            list.push(counter);
        }
     counter--;
    }
    return list;
}