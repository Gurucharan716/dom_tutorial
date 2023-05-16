const mainButton = document.querySelector("main button");
const body = document.querySelector("body");
const currentColor = document.querySelector(".current-color");
function randomColorGenartor(){
  const red = Math.floor(Math.random()*256);
  const green = Math.floor(Math.random()*256);
  const blue = Math.floor(Math.random()*256);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  return randomColor;
}


mainButton.addEventListener("click", ()=>{
  const randomColor = randomColorGenartor();
  body.style.backgroundColor = randomColor;
  currentColor.textContent= randomColor;
  
})