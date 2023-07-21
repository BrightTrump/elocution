//Services-dropdown-menu
var dropdownIcon = document.getElementById("dropdown-icon");
var dropdown = document.getElementById("dropdown-ul");

dropdownIcon.addEventListener("click", () => {
  dropdown.style.display = "block";
  dropdown.classList.toggle("mystyle");
  dropdown.style.display = "none";
});

//mobile-menu design
const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});
mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
