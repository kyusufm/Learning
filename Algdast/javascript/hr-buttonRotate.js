const button = document.getElementById("btn5");
let temp;
button.addEventListener("click", function(e) {
    temp = document.getElementById("btn1").innerHTML;
    temp2 = document.getElementById("btn2").innerHTML;
    temp3 = document.getElementById("btn3").innerHTML;
    temp4 = document.getElementById("btn4").innerHTML;
    temp6 = document.getElementById("btn6").innerHTML;
    temp7 = document.getElementById("btn7").innerHTML;
    temp8 = document.getElementById("btn8").innerHTML;
    temp9 = document.getElementById("btn9").innerHTML;
    
    document.getElementById("btn1").innerHTML = temp4;
    document.getElementById("btn2").innerHTML = temp;
    document.getElementById("btn3").innerHTML = temp2;
    document.getElementById("btn4").innerHTML = temp7;
    document.getElementById("btn6").innerHTML = temp3;
    document.getElementById("btn7").innerHTML = temp8;
    document.getElementById("btn8").innerHTML = temp9;
    document.getElementById("btn9").innerHTML = temp6;
})