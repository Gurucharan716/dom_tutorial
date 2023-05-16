// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";                         // static list
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems); 

const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
const sixthLi = document.createElement("li");            // this is live list
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems); 