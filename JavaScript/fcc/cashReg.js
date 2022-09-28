function checkCashRegister(price, cash, cid) {
    //change
    //cid = cash in drawers
    //cek total cid ?
    let change=cash*100-price*100;
  
    //get cid total
    let cidTotal =0;
    for (let el of cid){
      cidTotal+=el[1]*100
    }
  
    if (cash < price){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else if (change > cidTotal){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else if (cash*100-price*100 === cidTotal){
      //change = total in drawers
        return {status: "CLOSED", change: cid}
    } else {
      //where return < cidTotal, 
      //return return from biggest to lowest
      cid = cid.reverse();
      let moneyList ={"ONE HUNDRED": 10000,"TWENTY":2000,"TEN": 1000,"FIVE":500,"ONE": 100,"QUARTER":25,"DIME": 10,"NICKEL":5,"PENNY": 1};
      let finChange =[];
      for (let el of cid){
        el[1] = el[1]*100
        let tempChange = [el[0],0];
        
        while (change >= moneyList[el[0]] && el[1]>0){
          change -= moneyList[el[0]]
          el[1] -= moneyList[el[0]]
          tempChange[1] += moneyList[el[0]]/100
        }
        if (tempChange[1]>0){
          finChange.push(tempChange)
        }
        
        //console.log(finChange)
      }
      if (change>0){
        return {status: "INSUFFICIENT_FUNDS", change: []}
      }
      //return change = tempChange that not 0,
      return {status: "OPEN", change:finChange}
    }
  
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);