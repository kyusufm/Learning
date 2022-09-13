function rotateLeft(d, arr) {
    // Write your code here
    const len = arr.length;
    var temp =0;
    for (var i =0; i<d; i++){
        //get first value
        temp = arr[0];
        //remove first value
        arr.shift();
        //insert /push
        arr.push(temp); 
    }
    return arr;
}