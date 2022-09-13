// Write your code here
const slen = strings.length;
const qlen = queries.length;
var arresult=[];
//let print = 0;
for (var i=0; i<qlen; i++){
    var print = 0;
    for (var j=0; j<slen; j++){
        if (queries[i]==strings[j]){
            print++;
        }   
    }
    arresult.push(print);
   
}
return arresult;