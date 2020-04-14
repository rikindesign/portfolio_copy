// Skew-Frame-Animation JavaScript - R & Design 4.0
console.log('Skew')

// Declarations
const sectionOne = document.getElementById('one')
const sectionTwo = document.getElementById('two')
let currentPixel = window.pageYOffset

// Looper Function
const looper = function() {
    // Checks for no scroll and active animation
    const newPixel = window.pageYOffset
    const diff = newPixel - currentPixel
    const speedSectionSmall = diff * 0.09
    const speedSectionWide = diff * 0.09

    // Animated Sections (must include 'will-change: transform;' in SASS)
    sectionOne.style.transform = 'skewY(' + speedSectionWide + 'deg)';
    sectionTwo.style.transform = 'skewY(' + speedSectionWide + 'deg)';

    currentPixel = newPixel

    requestAnimationFrame(looper)
}

// Function Call
looper()