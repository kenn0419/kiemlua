const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const arrowUp = document.querySelector('.arrow-up');
const exitBtn = document.querySelector('#menu .entry .exit');
const menuModal = document.querySelector('#menu');
const menuBtn = document.querySelector('.menuBtn');

exitBtn.addEventListener('click', function () {
    menuModal.style.display = 'none';
})

menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menuModal.style.display = 'block';
})

document.addEventListener('click', function (e) {
    if ((!menuModal.contains(e.target) && menuModal.style.display === 'block')) {
        menuModal.style.display = 'none';
    }
})


window.addEventListener('scroll', function () {
    if (window.scrollY >= 1000) {
        arrowUp.style.display = 'block';
    } else {
        arrowUp.style.display = 'none';
    }
})

arrowUp.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.mySwiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1024: { slidesPerView: 3, spaceBetween: 30 },
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});


