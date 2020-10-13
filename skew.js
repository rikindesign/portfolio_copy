// Skew-Frame-Animation JavaScript - R & Design 4.0
console.log('Skew')

// Declarations
const sectionOne = document.getElementById('one')
const sectionTwo = document.getElementById('two')
const sectionThree = document.getElementById('three')
const sectionFour = document.getElementById('four')
const sectionFive = document.getElementById('five')
const titleOne = document.getElementById('title-one')
const titleTwo = document.getElementById('title-two')
let currentPixel = window.pageYOffset

// Looper Function
const looper = function() {
    // Checks for no scroll and active animation
    const newPixel = window.pageYOffset
    const diff = newPixel - currentPixel
    const speedSectionSmall = diff * 0.2
    const speedSectionWide = diff * 0.05

    // Animated Sections (must include 'will-change: transform;' in SASS)
    // Set up for-loop for dynamically adding skewing per object-type
    sectionOne.style.transform = 'skewY(' + speedSectionWide + 'deg)';
    sectionTwo.style.transform = 'skewY(' + speedSectionWide + 'deg)';
    sectionThree.style.transform = 'skewY(' + speedSectionWide + 'deg)';
    sectionFour.style.transform = 'skewY(' + speedSectionWide + 'deg)';
    sectionFive.style.transform = 'skewY(' + speedSectionWide + 'deg)';
    //titleOne.style.transform = 'skewY(' + speedSectionSmall + 'deg)';
    //titleTwo.style.transform = 'skewY(' + speedSectionSmall + 'deg)';

    currentPixel = newPixel

    requestAnimationFrame(looper)
}

// Function Call
looper()