// ScrollMagic-Animation JavaScript - R & Design 4.0


// Initializer Variables
const intro = document.querySelector('intro')
const nav = document.querySelector('nav');

// End Section
const section = document.querySelector('section');
const end = section.querySelector('h1');

// Animation Controller
const controller = new ScrollMagic.Controller();

// Scene Navbar
const navSceneAnim = TweenMax.fromTo(nav, 3, { opacity: 0 }, { opacity: 1 });
let navScene = new ScrollMagic.Scene({
        duration: 500, // Length
        triggerElement: intro, // Animated Element
        triggerHook: 0 // Start
    })
    .setTween(navSceneAnim) // Apply TweenMax to navScene
    .addTo(controller);

// Video Animation
let accelerationAmount = 0.5;
let scrollingPosition = 0;
let delay = 0;

// Scene Activation
scene.on('update', e => {
    scrollingPosition = e.scrollPos / 1000;
    video.currentTime = scrollingPosition;
});