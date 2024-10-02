// Your code here
console.log('in JS');
let theDiv=document.querySelector("#myDiv");

let helloHTML=document.createElement("p");
helloHTML.style.background="yellow"
console.log(theDiv,helloHTML);

document.body.appendChild(helloHTML);
helloHTML.innerHTML='Hello World';

