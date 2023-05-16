const allButton = document.querySelectorAll(".my-buttons button");
// console.log(allButton);

// for(let button of allButton){
//   button.addEventListener("click", function(){
//     console.log(this.textContent);
//   })
// };

// for(let i=0; i<allButton.length;i++){
//   allButton[i].addEventListener("click", function(){
//     console.log(this.textContent);
//   })
// }

allButton.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log(this.textContent);
  })
})



