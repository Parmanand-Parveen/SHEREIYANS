// const friend = document.querySelector(".status");
// const button = document.querySelector(".toggelebutton");

// button.addEventListener("click", () => {
//   if (button.innerText === "Follow") {
//     friend.innerHTML = "Friends";
//     button.innerHTML = "Unfollow";
//   } else {
//     friend.innerHTML = "Stranger";
//     button.innerHTML = "Follow";
//   }
// });
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");
const nav_item = document.querySelector(".nav-item");

menu.addEventListener("click", () => {
  nav.style.height = "50vh";
  menu.style.display = "none";
  close.style.display = "initial";
 nav_item.style.display = "initial";
});

close.addEventListener("click", () => { 
  nav.style.height = "10vh";
  menu.style.display = "initial";
  close.style.display = "none";
  nav_item.style.display = "none";
});

