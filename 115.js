// beforebegin       // outside ul starts add
// afterbegin        // within ul starts add
// beforeend         // within ul lastadd
// afterend          // outsinde ul lastadd

const todoList = document.querySelector(".todo-list"); 
todoList.insertAdjacentHTML("beforeend", "<li> Teach students </li>");   
