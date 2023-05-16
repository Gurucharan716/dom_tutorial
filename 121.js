// this keyword



const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", function(){               
  console.log("you clicked me !!!!");
  console.log("value of this");
  console.log(this);
});

// normal function this value is btn
// arrow function this value is window