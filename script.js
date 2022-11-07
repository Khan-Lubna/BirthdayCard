function callname(){
    document.getElementById("demo").innerHTML=localStorage.getItem("lastname");
}
function showname(){
    var n = document.getElementById("display").value;
    localStorage.setItem("lastname",n);
    callname();
}
callname();