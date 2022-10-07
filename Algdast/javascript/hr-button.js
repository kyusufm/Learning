const button = document.getElementById("btn");

button.addEventListener("click",function(){
    //get inner html for
    let count = document.getElementById("btn").innerHTML;
    count++;
    document.getElementById("btn").innerHTML = count;
    console.log(count++);

    //render innerHtml for
})