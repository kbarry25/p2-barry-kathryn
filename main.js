
// hamburger menu

var hamburger = document.getElementsByClassName('hamburger');
var menu = document.getElementsByClassName('menu');

function showMenu() {
  menu[0].classList.toggle('show');
};

for( i = 0; i < hamburger.length; i ++){
  hamburger[i].addEventListener("click", showMenu)
  hamburger[i].addEventListener("click", showMenu)
}

// pop-up banner

var popup = document.getElementsByClassName('pop-up');
var fate = document.getElementsByClassName('fate');

function showAd() {
  popup[0].classList.toggle('show');
};

for( i = 0; i < popup.length; i ++){
  fate[i].addEventListener("mouseover", showAd)
}

var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

//Menu

var nav = document.getElementsByClassName('nav');

var subNav = document.getElementsByClassName('subnav');
//console.log(menuLabels);

function showNav() {
  subNav[0].classList.toggle('show');
};

for( i = 0; i < nav.length; i ++){
  nav[i].addEventListener("click", showNav)
  nav[i].addEventListener("click", showNav)
};
