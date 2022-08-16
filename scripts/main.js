var myImage = document.querySelector("img");

myImage.onclick = function(){
	var mySrc = myImage.getAttribute("src");
	if(mySrc === "folder-images/logo-mozilla.png") {
		myImage.setAttribute  
("src","folder-images/logo-mozilla-dark.png");
	} else {
		myImage.setAttribute ("src","folder-images/logo-mozilla.png");
	}
}
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
	var myName = prompt("Пожалуйста введите Ваше имя.");
	localStorage.setItem("name", myName);
	myHeading.textContent = "Вроде что то выходит, " + myName;	
}
if(!localStorage.getItem("name")) {
	setUserName();
}	else {
	var storedName = localStorage.getItem("name");
	myHeading.textContent = "Mozilla is cool, " + storedName;
}
myButton.onclick = function() {
	setUserName();
}