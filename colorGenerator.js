var css = document.querySelector("h3");
var Color1 = document.querySelector(".Color1");
var Color2 = document.querySelector(".Color2");
var body = document.getElementById("Gradient");

function setGradinet(){
	body.style.background = "linear-gradient(to right, " 
	+ Color1.value 
	+ ", " 
	+Color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

 Color1.addEventListener("input", setGradinet);

Color2.addEventListener("input", setGradinet);
	