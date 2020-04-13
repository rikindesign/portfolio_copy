// Skew-Frame-Animation JavaScript


// Declarations
const sectionOne = document.getElementById('one')
const sectionTwo = document.getElementById('two')
const sectionThree = document.getElementById('three')
let currentPixel = window.pageYOffset

// Looper Function
const looper = function() {
    // Checks for no scroll and active animation
    const newPixel = window.pageYOffset
    const diff = newPixel - currentPixel
    const speedSectionSmall = diff * 0.09
    const speedSectionWide = diff * 0.09

    // Animated Sections
    sectionOne.style.transform = 'skewY(' + speedSectionSmall + 'deg)';
    sectionTwo.style.transform = 'skewY(' + speedSectionWide + 'deg)';
    sectionThree.style.transform = 'skewY(' + speedSectionWide + 'deg)';

    currentPixel = newPixel

    requestAnimationFrame(looper)
}

// Function Call
looper()