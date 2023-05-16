// const rootNode = document.getRootNode();
// const htmlElement = rootNode.childNodes[0];
// // console.log(htmlElement.childNodes);   // NodeList(3) [head, text, body]
// const headElementNode = htmlElement.childNodes[0];
// const textNode1 = htmlElement.childNodes[1];
// const bodyElementNode = htmlElement.childNodes[2];
// // console.log(headElementNode);
// // console.log(textNode1);
// // console.log(bodyElementNode);
// console.log(headElementNode.childNodes);

// sibling relationship

// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";

// const body = document.body;
// body.style.color = "#black";
// body.style.backgroundColor = "lightblue";

// const head = document.querySelector("head");
// // console.log(head);
// const title = head.querySelector('title');
// console.log(title.childNodes);

const container = document.querySelector(".container");
console.log(container.childNodes);   //NodeList(5) [text, h1, text, p, text]
console.log(container.children);    //HTMLCollection(2) [h1, p]