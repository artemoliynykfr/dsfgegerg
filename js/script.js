/* default consts*/
const body = document.body
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
};
const observer = new IntersectionObserver(handleIntersection, observerOptions);
/* default functions */
function animateNumberCount(element) {
    const endValue = parseInt(element.textContent, 10);
    const duration = 2500;
    const interval = 50;
    const step = (endValue / duration) * interval;
    let currentCount = 0;
    const updateCount = () => {
        currentCount += step;
        if (currentCount >= endValue) {
            currentCount = endValue;
            clearInterval(intervalId);
        }
        const formattedCount = Math.floor(currentCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        element.textContent = formattedCount;
    };
    const intervalId = setInterval(updateCount, interval);
}

function handleIntersection(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateNumberCount(entry.target);
            observer.unobserve(entry.target);
        }
    });
}

function setEqualSlideHeight(slides) {
    slides = document.querySelectorAll(`${slides}`);
    var maxHeight = 0;
    slides.forEach(function (slide) {
        slide.style.height = "";
        var slideHeight = slide.offsetHeight;
        if (slideHeight > maxHeight) {
            maxHeight = slideHeight;
        }
    });
    slides.forEach(function (slide) {
        slide.style.height = maxHeight + "px";
    });
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
/* navbar */
if (document.querySelector('.nav')) {
    const navbar = document.querySelector('.navbar')
    const navBurger = navbar.querySelector('.burger')
    const navMenu = navbar.querySelector('.nav__menu')
    /* burger menu for navbar */
    navBurger.addEventListener('click', () => {
        if (navBurger.classList.contains('active')) {
            navBurger.classList.remove('active')
            navMenu.classList.remove('active')
            body.classList.remove('locked')
        } else {
            navBurger.classList.add('active')
            navMenu.classList.add('active')
            body.classList.add('locked')
        }
    })
    /* fixed navbar */
    function fixedNav() {
        if (window.scrollY > 1) {
            navbar.classList.add("fixed")
        } else {
            navbar.classList.remove("fixed")
        }
    }
    fixedNav()
    window.addEventListener('scroll', () => {
        fixedNav()
    })
}
/* modal */
if (document.querySelector('.modal')) {
    const modalBtns = document.querySelectorAll('.modal-open')
    for (const modalBtn of modalBtns) {
        $(modalBtn).magnificPopup({
            type: "inline"
        })
    }
}
/* swiper for katalog section */
if (document.querySelector('.katalog__swiper.swiper')) {
    const karalogSwiper = new Swiper('.katalog__swiper.swiper', {
        direction: 'horizontal',
        loop: !1,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
            rows: 4,
            fill: "row",
        },
        breakpoints: {
            1111: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: "row",
                },
            },
            993: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: "row",
                },
            },
            601: {
                slidesPerView: 2,
                spaceBetween: 24,
                grid: {
                    rows: 2,
                    fill: "row",
                },
            },
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    });
    if (document.querySelector('.section__katalog-help')) {
        karalogSwiper.params.breakpoints = {
            1111: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: "row",
                },
            },
            993: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: "row",
                },
            },
            601: {
                slidesPerView: 2,
                spaceBetween: 24,
                grid: {
                    rows: 1,
                    fill: "row",
                },
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 24,
                grid: {
                    rows: 1,
                    fill: "row",
                },
            },
        }
    }
    document.addEventListener("DOMContentLoaded", () => {
        setEqualSlideHeight(".katalog__swiper.swiper .swiper-slide");
    });
    if (!isMobileDevice()) {
        window.addEventListener("mouseover", () => {
            setEqualSlideHeight(".katalog__swiper.swiper .swiper-slide");
        });
    }
}
/* advant count animation for numbers */
if (document.querySelector('.advant')) {
    const numberCounters = document.querySelectorAll(".advant__item-title span");
    numberCounters.forEach((counter) => {
        observer.observe(counter);
    });
}
/* swiper for exaples section */
if (document.querySelector('.examples__swiper.swiper')) {
    const exampleSwipers = document.querySelectorAll('.examples__swiper.swiper')
    for (const exampleSwiper of exampleSwipers) {
        new Swiper(exampleSwiper, {
            direction: 'horizontal',
            loop: !0,
            speed: 1000,
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.nextProject',
            },
        });
        new Swiper(exampleSwiper.querySelector('.examples__item-swiper'), {
            direction: 'horizontal',
            loop: !1,
            speed: 1000,
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
        });
    }
}
/*  */
if (document.querySelector('.card__image')) {
    const cardImage = document.querySelector('.card__image');
    const containerHeight = document.querySelector('.card').offsetHeight;
    const adjustedHeight = containerHeight - 380;
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 992) {
            if (window.scrollY >= adjustedHeight) {
                cardImage.style.top = 'auto';
                cardImage.style.bottom = '0';
            } else {
                const newTop = Math.max(window.scrollY - 40, 0);
                cardImage.style.top = `${newTop}px`;
            }
            const topValue = parseFloat(cardImage.style.top);
            if (topValue <= -1) {
                cardImage.style.top = '0';
            }
        }
    })
}