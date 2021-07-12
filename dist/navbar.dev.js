"use strict";

// Responsive Navbar JavaScript - R & Design 4.0
console.log('Navbar');

var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', function () {
    // Navigation Toggling
    nav.classList.toggle('active-nav'); // Link Animations

    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = "navLinkFade 0.25s ease forwards ".concat(index / 7 + 0.24, "s");
      }
    }); // Burger Animations

    burger.classList.toggle('toggle');
  });
}; //Disappear on Scroll

/* var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    console.log('Disappear on Scroll')
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-48px";
    }
    prevScrollpos = currentScrollPos;
} */
// App Wide Function Calls


navSlide();