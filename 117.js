//apendChild
// insertBefore
// replaceChild


const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
// li.textContent = "new todo";
const referenceNode = document.querySelector(".first-todo");
// li.textContent = "New todo";
ul.removeChild( referenceNode);

