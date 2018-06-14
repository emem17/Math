var t = document.getElementById("tn");
var w = document.getElementById("ans"); //input
var q = document.getElementById("quest");
var bt = document.getElementById("btn");
var l = document.getElementById("lvl");
var a;
var b;
var c = a + b;
var i = 1;

function provera(e) {
    var key = e.which;
    if(key==13){
    var v = w.value;
    if(v==c) {
        i++;
        l.style.color = "green";
        l.innerHTML = "Level " + i;
        w.value = "";
        if(i>=10) {
            proizvod();
        }
        else {
            zbir();
        };
 }
    else{
        i=1;
        l.style.color = "red";
        l.innerHTML = "Level 1";
        zbir();
    }
  };
};

function zbir() {
    bt.innerHTML="GO!"
 a = Math.floor(Math.random()*100);
 b = Math.floor(Math.random()*100);
    c = a + b;
q.innerHTML = a + " " +  "+" + " "   + b + " " + "= ?";
    q.style.color="white";
    };

function proizvod(){
    bt.innerHTML="GO!"
 a = Math.floor(Math.random()*20);
 b = Math.floor(Math.random()*20);
    c = a * b;
q.innerHTML = a + " " +  "*" + " "   + b + " " + "= ?";
    q.style.color="white";
    };


 addEventListener("keydown", provera);
bt.addEventListener("dblclick",zbir);
















