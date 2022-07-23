function rot13(str) {
    str=str.split("");
  
    const arr1 = "ABCDEFGHIJKLM";
    const arr2 = "NOPQRSTUVWXYZ";
    //loop letter
    /*
    rot set 1 = a - M
    rot set 2 = N - Z
  
    loop string
     if string in set1
      get string in set 1 location
      string = set2 get char at
    */
    //change letter value by 13
    //convert value back to letter
    for (let i = 0; i<str.length; i++){
      let y=arr1.indexOf(str[i]);
      let z=arr2.indexOf(str[i]);
  
      console.log(y);
      console.log(z);
  
      if (y > -1){
        str[i]=arr2[y];
      }else if (z>-1){
        str[i]=arr1[z];
      }
    }
    console.log(str.join(""));
    return str.join("");
    //return str;
    
  }
  
  rot13("SERR PBQR PNZC");