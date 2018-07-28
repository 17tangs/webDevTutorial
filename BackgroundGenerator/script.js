var css = document.querySelector("h3");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var body = document.querySelector("body");

body.style.background = "#FFFFFF";


function setGradient(){
	body.style.background =
		"linear-gradient(to right, " + c1.value + ", " + c2.value + ")";	
}


c1.addEventListener("input", setGradient);

c2.addEventListener("input", setGradient);

