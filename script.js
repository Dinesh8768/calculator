function addition(x,y){
    var x=parseFloat(document.getElementById("in1").value);
    var y=parseFloat(document.getElementById("in2").value);
    var add=x+y;
    document.getElementById("total1").innerHTML=add;
}
function subtraction(x,y){
    var x=parseFloat(document.getElementById("in1").value);
    var y=parseFloat(document.getElementById("in2").value);
    var sub=x-y;
    document.getElementById("total1").innerHTML=sub;
}
function multiplication(x,y){
    var x=parseFloat(document.getElementById("in1").value);
    var y=parseFloat(document.getElementById("in2").value);
    var mul=x*y;
    document.getElementById("total1").innerHTML=mul;
}
function division(x,y){
    var x=parseFloat(document.getElementById("in1").value);
    var y=parseFloat(document.getElementById("in2").value);
    var divi=x/y;
    document.getElementById("total1").innerHTML=divi;
}