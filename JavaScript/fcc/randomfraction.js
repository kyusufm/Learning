function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
    // Only change code above this line
  }

  function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random()*10);
  }

  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax-myMin + 1))+myMin
    // Only change code above this line
  }

  function convertToInteger(str) {
    parseInt (str, 2)
  }
  convertToInteger("10011");

  function checkSign(num) {
    return (num>0) ? "positive" : (num<0) ? "negative" : "zero";
  }
  
  checkSign(10);

  // Only change code below this line
function countdown(n){
    if (n<1){
      return [];
    }else{
      const countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
    return;
  }
  // Only change code above this line


  function rangeOfNumbers(startNum, endNum) {
    if (endNum-startNum === 0){
        return [endNum];
      }else{
        const countArray = rangeOfNumbers(startNum+1, endNum);
        countArray.unshift(startNum);
        console.log(countArray);
        return countArray;
  
      }
    return [];
  };