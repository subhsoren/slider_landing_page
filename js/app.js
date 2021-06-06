$(document).ready(function(){
    $('.slider').slick({
        prevArrow: '.prev-btn',
        nextArrow: '.next-btn',
        dots: true,
        appendDots: '.slider__dots',
        fade: true,
        autoplay: true,
        autoplaySpeed: '6000',

    })



})

const humburger = document.querySelector(".humburger");
const links = document.querySelector(".nav__links");

humburger.addEventListener("click", function () {

  links.classList.toggle("show");
});


    

