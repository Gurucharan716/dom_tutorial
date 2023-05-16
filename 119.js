// how to get dimension of an element

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect().top;
console.log(info);
