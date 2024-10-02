let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	const parentElement = document.querySelector("#myList");
	const textNode = document.createElement("li")
	parentElement.appendChild(textNode);
	parentElement.lastElementChild.innerHTML="Forth element";
});
