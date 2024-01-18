// Mainpage.js ->-> while scrolling down the bar dissapears
//Eleni Petraki
console.log("Script file loaded successfully");
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    // the name change if you have id in html.(id is for only one ,class for a team )
    document.getElementsByClassName("navbar")[0].style.top = "0";
  } else {
    document.getElementsByClassName("navbar")[0].style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
