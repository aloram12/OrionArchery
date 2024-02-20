
window.onscroll = function() {myFunction()};

var navBar = document.getElementById("Navigation");
var sticky = navBar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

