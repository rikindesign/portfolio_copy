"use strict";

// Responsive Navbar JavaScript - R & Design 4.0
console.log('Navbar');

var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  burger.addEventListener('click', function () {
    nav.classList.toggle('active-nav');
  });
}; // App Wide Function Calls


navSlide();