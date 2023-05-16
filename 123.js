// event object
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//   console.log(this.textContent);
// });

const allButton = document.querySelectorAll(".my-buttons button");
// console.log(allButton);

for(let button of allButton){
  button.addEventListener("click", (e)=>{
    console.log(e.currentTarget);
  })
};