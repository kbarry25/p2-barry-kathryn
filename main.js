

var hamburger = document.getElementsByClassName('hamburger');
var menu = document.getElementsByClassName('menu');

function toggleDropdown() {
  menu[0].classList.toggle('show');
};

for( i = 0; i < hamburger.length; i ++){
  hamburger[i].addEventListener("click", toggleDropdown)
  hamburger[i].addEventListener("click", toggleDropdown)
}
