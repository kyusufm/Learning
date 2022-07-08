function palindrome(str) {
    //remove all non alpha nueric.
    //turn to lowercase
    str = str.replace(/[^0-9a-z]/gi, '');
    let arr = Array.from(str.toLowerCase());
    console.log(arr);
    let ln = arr.length;
    let mid = Math.floor(ln/2);
    for (let i = 0; i<mid; i++){
      if (arr[i] !== arr[ln-i-1]){
        return false;
      }
    }
    return true;
  }
  
  palindrome("eye");