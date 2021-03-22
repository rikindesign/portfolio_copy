"use strict";

// Skew-Frame-Animation JavaScript - R & Design 4.0
console.log('Skew'); // Declarations

var sectionOne = document.getElementById('one');
var sectionTwo = document.getElementById('two');
var sectionThree = document.getElementById('three');
var sectionFour = document.getElementById('four');
var sectionFive = document.getElementById('five');
var sectionPortfolio = document.getElementById('portfolio');
var titleOne = document.getElementById('title-one');
var titleTwo = document.getElementById('title-two');
var currentPixel = window.pageYOffset; // Looper Function

var looper = function looper() {
  // Checks for no scroll and active animation
  var newPixel = window.pageYOffset;
  var diff = newPixel - currentPixel;
  var speedSectionSmall = diff * 0.2;
  var speedSectionWide = diff * 0.05; //diff * 0.05
  // Animated Sections (must include 'will-change: transform;' in SASS)
  // Set up for-loop for dynamically adding skewing per object-type

  sectionOne.style.transform = 'skewY(' + speedSectionWide + 'deg)';
  sectionTwo.style.transform = 'skewY(' + speedSectionWide + 'deg)';
  sectionThree.style.transform = 'skewY(' + speedSectionWide + 'deg)';
  sectionFour.style.transform = 'skewY(' + speedSectionWide + 'deg)';
  sectionFive.style.transform = 'skewY(' + speedSectionWide + 'deg)'; //sectionPortfolio.style.transform = 'skewY(' + speedSectionWide + 'deg)';
  //titleOne.style.transform = 'skewY(' + speedSectionSmall + 'deg)';
  //titleTwo.style.transform = 'skewY(' + speedSectionSmall + 'deg)';

  currentPixel = newPixel;
  requestAnimationFrame(looper);
}; // Function Call


looper();