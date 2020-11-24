
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
  popup[0].classList.add('show');
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


function showNav() {
  subNav[0].classList.toggle('show');
};

for( i = 0; i < nav.length; i ++){
  nav[i].addEventListener("click", showNav)
  nav[i].addEventListener("click", showNav)
};

var nav2 = document.getElementsByClassName('nav2');

var subNav2 = document.getElementsByClassName('subnav2');


function showNav2() {
  subNav2[0].classList.toggle('show');
};

for( i = 0; i < nav2.length; i ++){
  nav2[i].addEventListener("mouseenter", showNav2)
  nav2[i].addEventListener("mouseleave", showNav2)
};


//API

var weatherSpan = document.querySelectorAll("#weather p span");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult);

        var name = document.createTextNode(apiResult.name);
        weatherSpan[0].appendChild(name);

        var weather = document.createTextNode(apiResult.weather[0].main);
        weatherSpan[1].appendChild(weather);


    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=96708,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
