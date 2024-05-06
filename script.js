const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function elemImages() {
    const elemC = document.querySelector("#elem-container")
    const image = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        image.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        image.style.display = "none"
    })
    const elems = document.querySelectorAll(".elem")
    elems.forEach((e) => {
        e.addEventListener("mouseenter", function () {

            var img = e.getAttribute("data-image")
            image.style.backgroundImage = `url(${img})`

        })
    })
}

function swiperFunct() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        // centeredSlides: true,
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

}

var nav = document.querySelector("nav h3")
var div = document.querySelector("#full-scr")
var img = document.querySelector("nav img")
var flag = 0;

function menuFunct() {

    nav.addEventListener("click", () => {
        if (flag === 0) {
            div.style.top = 0
            img.style.opacity = 0
            flag = 1;
        } else {
            div.style.top = "-150%"
            img.style.opacity = 1
            flag = 0;

        }
    })
}

function loaderFunct() {
    var loader = document.querySelector("#loader")

    setTimeout(() => {
        loader.style.top = "-100%"
    }, 2500)
}

elemImages();
swiperFunct();
menuFunct();
loaderFunct();