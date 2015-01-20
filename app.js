/*   for (var i=0; i<items.length; i++{
   items[i].style.backgroundColors="yellow";
}

var things=document.getElementsByTagName("li");
   for (var x=0; x<things.length; x++){
things[x].addEventListener("click", clickFunction);
}

function clickFunction(event) {
event.target.className = "selected";
document.querySelector("img").setAttribute
("src", "./images/"+event.target.innerHTML+".jpeg"); */

/*function isEven(value){
    if (value%2 === 0) {
    	x();
    }
    else {
        O();
    }
}*/

document.getElementById("one-1").addEventListener("click", mark);
document.getElementById("one-2").addEventListener("click", mark);
document.getElementById("one-3").addEventListener("click", mark);
document.getElementById("two-1").addEventListener("click", mark);
document.getElementById("two-2").addEventListener("click", mark);
document.getElementById("two-3").addEventListener("click", mark);
document.getElementById("three-1").addEventListener("click", mark);
document.getElementById("three-2").addEventListener("click", mark);
document.getElementById("three-3").addEventListener("click", mark);

var i = 1;

function mark(event) {
    if (event.target.innerHTML === " ") {
        if (i % 2 === 0) {
            event.target.innerHTML = "O";
            event.target.backgroundColor = "red";

        } else {
            event.target.innerHTML = "X";
        }
        i++;
    }
}

//function 
function clear() {
    document.getElementById("one-1").innerHTML = " ";
    document.getElementById("one-2").innerHTML = " ";
    document.getElementById("one-3").innerHTML = " ";
    document.getElementById("two-1").innerHTML = " ";
    document.getElementById("two-2").innerHTML = " ";
    document.getElementById("two-3").innerHTML = " ";
    document.getElementById("three-1").innerHTML = " ";
    document.getElementById("three-2").innerHTML = " ";
    document.getElementById("three-3").innerHTML = " ";
    i = 1;
}
//function clear(){

//}


document.getElementById("reset").addEventListener("click", clear);