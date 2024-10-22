const friend = document.querySelector(".status");
const button = document.querySelector(".toggelebutton");

button.addEventListener("click", () => {
  if (button.innerText === "Follow") {
    friend.innerHTML = "Friends";
    button.innerHTML = "Unfollow";
  } else {
    friend.innerHTML = "Stranger";
    button.innerHTML = "Follow";
  }
});
