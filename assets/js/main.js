$(document).ready(function () {
    $('.cd-scroll').click(function () {
        $('html, body').animate({ scrollTop: $('#index-content').offset().top }, 500);
    })
})

const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.control');
let activeSlide = 0;
let prevActive = 0;

changeSlides();
let int = setInterval(changeSlides, 4000);

function changeSlides() {
    slides[prevActive].classList.remove('active');
    controls[prevActive].classList.remove('active');

    slides[activeSlide].classList.add('active');
    controls[activeSlide].classList.add('active');

    prevActive = activeSlide++;

    if (activeSlide >= slides.length) {
        activeSlide = 0;
    }

    console.log(prevActive, activeSlide);
}

controls.forEach(control => {
    control.addEventListener('click', () => {
        let idx = [...controls].findIndex(c => c === control);
        activeSlide = idx;

        changeSlides();

        clearInterval(int);
        int = setInterval(changeSlides, 4000);
    });
});


$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


// merch isotope and filter
$(window).on('load', function () {
    var merchIsotope = $('.merch-container').isotope({
        itemSelector: '.merch-item',
        layoutMode: 'fitRows'
    });

    $('#merch-flters li').on('click', function () {
        $("#merch-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        merchIsotope.isotope({
            filter: $(this).data('filter')
        });
        aos_init();
    });
});


function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });

}

navSlide();