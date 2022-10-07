function btnClick(e){
    let btn = e.target||e.srcElement;
    let act = document.getElementById(btn.id).innerHTML;
    let operator = "";
    let res = document.getElementById("res");
    const re = /[0-9]+/g;

    switch(act){
        case '0':
        case '1':
        case '+':
        case '-':
        case '*':
        case '/':
            operator = act;
            res.innerHTML += act;
            break;
        case 'C':
            res.innerHTML = "";
            break;
        case '=':
            const re = /[0-9]+/g;
            const re2 = /[^0-9]+/g;
            let s = res.innerHTML;
            let ac = s.match(re2);
            let r = s.match(re);
            
            let i=0;

            for (var el of r) {
              r[i] = parseInt(el,2);
              console.log(el);
              i++;
            }

            console.log(r);
            //do function
            let ns = r[0].toString().concat(ac,r[1].toString())
            
            console.log(ns);
            x = eval(ns).toString(2);
            
            res.innerHTML=x;

            break;
            
    }

}


var buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.onclick = btnClick;
}