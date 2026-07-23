function showname(){
    var n = document.getElementById("display").value;
    if (n.trim() === "") {
        alert("Please enter your name first!");
        return;
    }
    localStorage.setItem("lastname", n);
    window.location.href = "index2.html";
}

function goBack(){
    window.location.href = "index.html";
}

function callname(){
    var name = localStorage.getItem("lastname");
    if (name) {
        document.getElementById("demo").innerHTML = name;
    }
}

callname();
