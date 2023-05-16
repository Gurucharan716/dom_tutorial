// loop

// let navItems = document.getElementsByTagName("a"); // HTMLCollections
// console.log(navItems); 

// we can't use forEach method in HTMLCollection
// simple for loop
// for of loop

// for(let i = 0; i<navItems.length;i++){
//   // console.log(navItems[i]);
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems){
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
// }

// navItems = Array.from(navItems);
// // console.log(Array.isArray(navItems));
// navItems.forEach((navItem) => {
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
// });


// const navItems = document.querySelectorAll(".nav-item");  // NodeList
// console.log(navItems[2]);

let navItems = document.querySelectorAll("a"); 
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));
// console.log(navItems);
// simpe for loop
// foreach loop
// for of loop

         // simpe for loop
// for(let i = 0; i<navItems.length;i++){
//   // console.log(navItems[i]);
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
// }
 
              // for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
//   }
  
                // foreach loop
  navItems.forEach((navItem) => {
      navItem.style.backgroundColor = "#fff";
      navItem.style.color = "green";
      navItem.style.fontWeight = "bold";
    });