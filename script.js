/* MOBILE MENU */

function toggleMenu(){

    const nav = document.getElementById("nav");

    nav.classList.toggle("show");

}


/* SLIDER */

let currentSlide = 0;

const slides = document.getElementById("slides");

const totalSlides =
    document.querySelectorAll("#slides img").length;


function showSlide(number){

    currentSlide = number;


    if(currentSlide >= totalSlides){

        currentSlide = 0;

    }


    if(currentSlide < 0){

        currentSlide = totalSlides - 1;

    }


    slides.style.transform =
        "translateX(-" +
        (currentSlide * 100) +
        "%";

}


function nextSlide(){

    showSlide(currentSlide + 1);

}


function previousSlide(){

    showSlide(currentSlide - 1);

}


/* AUTOMATIC SLIDER */
setInterval(function(){

    nextSlide();

},4000);


/* MOBILE SWIPE */

let startX = 0;


slides.addEventListener(
    "touchstart",
    function(event){

        startX =
            event.touches[0].clientX;

    }
);


slides.addEventListener(
    "touchend",
    function(event){

        let endX =
            event.changedTouches[0].clientX;


        if(startX - endX > 50){

            nextSlide();

        }


        if(endX - startX > 50){

            previousSlide();

        }

    }
);
