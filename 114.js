// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach student");
// newTodoItem.append(newTodoItemText);
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);


// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach student");
// newTodoItem.textContent = "Teach student 1";
// // newTodoItem.append(newTodoItemText);                                 // adds in last "apped"
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach student 1";
// const todoList = document.querySelector(".todo-list");       // addas in starting    "prepend"
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);

// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();                                                  // to remove
// console.log(todo1);

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach student";
const todoList = document.querySelector(".todo-list"); 
todoList.after(newTodoItem);
