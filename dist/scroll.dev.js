"use strict";

// ScrollMagic-Animation JavaScript - R & Design 4.0
console.log('Scroll'); // Initializer Variables
// const intro = document.querySelector('intro')

var nav = document.querySelector('nav'); // End Section

var section = document.querySelector('section');
var end = section.querySelector('h1'); // Animation Controller

var controller = new ScrollMagic.Controller(); // Scene Navbar

var navSceneAnim = TweenMax.fromTo(nav, 3, {
  opacity: 0
}, {
  opacity: 1
});
var navScene = new ScrollMagic.Scene({
  duration: 500,
  // Length
  triggerElement: intro,
  // Animated Element
  triggerHook: 0 // Start

}).setTween(navSceneAnim) // Apply TweenMax to navScene
.addTo(controller); // Video Animation

var accelerationAmount = 0.5;
var scrollingPosition = 0;
var delay = 0; // Scene Activation

scene.on('update', function (e) {
  scrollingPosition = e.scrollPos / 1000;
  video.currentTime = scrollingPosition;
});