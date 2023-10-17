var di1=document.getElementById("dice1")
var di2=document.getElementById("dice2")
var cd1=document.getElementById("compd1")
var cd2=document.getElementById("compd2")
var ptotal=document.getElementById("pnum")
var cctotal=document.getElementById("cnum")
var result=document.getElementById("res")
 var name1=prompt("Enter the name")
 var pname=document.getElementById("pn")
function s(){
    var d1=ra()
    var d2=ra()
    var d3=ra()
    var d4=ra()
    di1.innerHTML= d1
    di2.innerHTML= d2
    cd1.innerHTML=d3
    cd2.innerHTML=d4
     pname.innerHTML=name1
    var p= d1+d2
    var c= d3+d4
    ptotal.innerHTML=p
    cctotal.innerHTML=c
    if(p > c){
        result.innerHTML=`Congrats ${name1}, you won the match`
            }
            else if(p<c){
                result.innerHTML=`${name1},you lost the match`
            }
            else{
                result.innerHTML=`Draw Match`
            }
}
function ra(){
    var ran=Math.floor(Math.random()*6)+1
   
    return ran
    
}
