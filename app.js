// Application JavaScript - R & Design 4.0
console.log('App');

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


// Mouse Entering & Leaving
var mouseEnter;

function mouseEnterLeave() {
    if (mouseEnter == true) {
        t.style.display = 'visible';
        e.style.display = 'visible';
        i.style.display = 'visible';
    }
    if (mouseEnter == false) {
        t.style.visibility = 'hidden';
        e.style.visibility = 'hidden';
        i.style.visibility = 'hidden';
    }
}

$(document).mouseenter(function() {
    mouseEnter = true;
    mouseEnterLeave()
    console.log('in', mouseEnter);
});

$(document).mouseleave(function() {
    mouseEnter = false;
    // mouseEnterLeave()
    console.log('out', mouseEnter);
});