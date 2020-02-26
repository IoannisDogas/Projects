"use strict"

/*...................Latest news slideshow.........................*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


/*........................NAVIGATION...........................*/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/*~~~~~~~~~~~~~~~top nav scroll~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myTopnav").classList.add("switchNavScroll");
    } else {
        document.getElementById("myTopnav").classList.remove("switchNavScroll");
    }
}

/*......................WHELL SEARCHER......................

$(function () {
    $("#width").selectmenu().selectmenu("menuWidget")
        .addClass("overflow");

    $("#diameter").selectmenu().selectmenu("menuWidget")
        .addClass("overflow");

    $("#application")
      .selectmenu()
      .selectmenu("menuWidget")
        .addClass("overflow");
});*/