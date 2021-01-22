// Application JavaScript - R & Design 4.0
console.log('App')

// Cursor
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");

(function($) {
    "use strict";

    //Page Cursors
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px",
            t.style.top = n.clientY + "px",
            e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px",
            i.style.left = n.clientX + "px",
            i.style.top = n.clientY + "px"
    });

    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }

    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }

    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

})(jQuery);

// Dynamic Images
let imageOne = document.getElementById('image-one')
let imageTwo = document.getElementById('image-two')
let imageThree = document.getElementById('image-three')
let imageFour = document.getElementById('image-four')
let textDescription = document.getElementById('text-description')

function myFunction(x) {
    if (x.matches) { // If media query matches
        imageOne.src = 'assets/images/Botler - Mobile.jpg'
        imageTwo.src = 'assets/images/ChowTime AR - Mobile.jpg'
        imageThree.src = 'assets/images/ChowTime - Mobile.jpg'
        imageFour.src = 'assets/images/Google - Mobile.jpg'
        console.log('mobile')
    } else {
        imageOne.src = 'assets/images/Botler - Desktop.jpg'
        imageTwo.src = 'assets/images/ChowTime AR - Desktop.jpg'
        imageThree.src = 'assets/images/Safe@Lab - Desktop.jpg'
        imageFour.src = 'assets/images/Google - Desktop.jpg'
        console.log('desktop')
    }
}

var windowElement = window.matchMedia("(max-width: 768px)")
myFunction(windowElement) // Call listener function at run time
windowElement.addListener(myFunction) // Attach listener function on state changes

// Parallax Scroll
/* function parallax(element, distance, speed) {
    const scrollItem = document.getElementById(element)
    console.log(scrollItem)
    scrollItem.transform.style = `translateY(${distance * speed}px)`
}

window.addEventListener('scroll', function() {
    parallax('one', window.scrollY, 1)
}) */