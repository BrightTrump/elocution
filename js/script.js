var dropdownIcon = document.getElementById("dropdown-icon");
var dropdown = document.getElementById("dropdown-ul");

dropdownIcon.addEventListener("click", "mouseOver", () => {
  dropdown.style.display = "block";
  dropdown.classList.toggle("mystyle");
  dropdown.style.display = "none";
});
