let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
const selectionList = document.querySelector("#mySelect");
for (let countryOpcion of countries) {
    let option = document.createElement("option");
    option.innerText=countryOpcion;
    selectionList.appendChild(option);
} 

selectionList.addEventListener('change',countryAlert)

function countryAlert() {
    alert(selectionList.value);
}