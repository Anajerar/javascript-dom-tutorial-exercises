// Your code here
const addToDo = document.querySelector("#addToDo");
const list = document.querySelector("ul");

addToDo.addEventListener("change",addTask);

function addTask() {
    let newTask = document.createElement("li");
    newTask.innerHTML= '<span><i class="fa fa-trash"></i></span>'+addToDo.value;
    list.appendChild(newTask);
}

list.addEventListener("click", (e) => {
    let liNode = null
    if (e.target.localName == "i" ){
        liNode = e.target.parentNode.parentNode;
    } else if (e.target.localName == "span"){
        liNode = e.target.parentNode;
    }
    if (liNode != null){
        liNode.parentNode.removeChild(liNode);
    }
}
)