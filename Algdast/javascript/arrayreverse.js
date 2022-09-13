function reverseArray(a) {
    // Write your code here
    const tem = [];
    for (var i=a.length-1; i>=0; i--){
        tem.push(a[i]);
    }
    return tem;
}