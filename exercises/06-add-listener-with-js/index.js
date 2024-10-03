window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	let greenButton = document.getElementById("theGreen");
	greenButton.addEventListener("click", woohoo);
	
	
};

// The listener function
window.woohoo = function woohoo() {
	alert("woohoo");
}


