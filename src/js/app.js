import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.6.1.min.js";
import "./modules/bootstrap.bundle.min.js";
import "./modules/swiper-bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Инициализация слайдера ticker-slider
new Swiper(jQuery('.ticker-slider')[0], {
  slidesPerView: 'auto',
  spaceBetween: 50,
  speed: 4000,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true
  },
  a11y: false,
  allowTouchMove: false,
  breakpoints: {
    0: {
      spaceBetween: 20,
    },
    992: {
      spaceBetween: 50,
    },
  },
});

// Инициализация слайдера ticker-slider 2
new Swiper(jQuery('.ticker-slider-purple')[0], {
  slidesPerView: 'auto',
  spaceBetween: 85,
  speed: 4000,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true
  },
  breakpoints: {
    0: {
      spaceBetween: 40,
    },
    992: {
      spaceBetween: 85,
    },
  },
  a11y: false,
  allowTouchMove: false,
});

let aboutMore = document.querySelector('.about__more');
let aboutContentHide = document.querySelector('.about__text--hide');
let aboutContentVisible = document.querySelector('.about__text--visible');

aboutMore?.addEventListener('click', () => {
  aboutContentHide.classList.add('active');
  aboutContentVisible.classList.add('gradient-none');
  aboutMore.classList.add('hide');
});


// Инициализация слайдера choice__center-slider
document.querySelectorAll('.choice__center-slider').forEach(n => {
  const mySwiperChoiseCenter = new Swiper(n, {
    slidesPerView: 3,
    spaceBetween: 100,
    speed: 800,
    on: {
      slideChange: function () {
        var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
        let offer = n.closest('.choice__center').querySelector('.scrollbar__nav-count');
        offer.innerHTML = '<span>0' + (this.activeIndex + 1) + '' + `</span><span>` + '| 0' + (slides_count.length) + '</span>';
      }
    },
    scrollbar: {
      el: '.choice__center .swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  function change() {

    setTimeout(function () {
      var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
      let offer_1 = n.closest('.choice__center').querySelector('.scrollbar__nav-count');
      if (offer_1) {
        offer_1.innerHTML = '<span>0' + (mySwiperChoiseCenter.activeIndex + 1) + '' + `</span><span>` + '| 0' + (slides_count.length) + '</span>';
      }
    }, 1000);
  }
  change();
});

// Инициализация слайдера choice-slider
document.querySelectorAll('.choice-slider').forEach(n => {
  const mySwiperChoiseCenter = new Swiper(n, {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    on: {
      slideChange: function () {
        var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
        let offer = n.closest('.choice__bottom').querySelector('.scrollbar__nav-count');
        offer.innerHTML = '<span>0' + (this.activeIndex + 1) + '' + `</span><span>` + '| 0' + (slides_count.length) + '</span>';
      }
    },
    scrollbar: {
      el: '.choice__bottom .swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  function change() {

    setTimeout(function () {
      var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
      let offer_1 = n.closest('.choice__bottom').querySelector('.scrollbar__nav-count');
      if (offer_1) {
        offer_1.innerHTML = '<span>0' + (mySwiperChoiseCenter.activeIndex + 1) + '' + `</span><span>` + '| 0' + (slides_count.length) + '</span>';
      }
    }, 1000);
  }
  change();
});

// Инициализация слайдера cooperation-slider
document.querySelectorAll('.cooperation-slider').forEach(n => {
  const mySwiperCooperation = new Swiper(n, {
    slidesPerView: 6,
    spaceBetween: 30,
    speed: 800,
    on: {
      slideChange: function () {
        var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
        let offer = n.closest('.cooperation').querySelector('.scrollbar__nav-count');
        offer.innerHTML = '<span>0' + (this.activeIndex + 1) + '' + `</span><span>` + '| 0' + (slides_count.length) + '</span>';
      }
    },
    scrollbar: {
      el: '.cooperation .swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 6,
      },
    },
  });

  function change() {

    setTimeout(function () {
      var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
      let offer_1 = n.closest('.cooperation').querySelector('.scrollbar__nav-count');
      if (offer_1) {
        offer_1.innerHTML = '<span>0' + (mySwiperCooperation.activeIndex + 1) + '' + `</span><span>` + '| 0' + (slides_count.length) + '</span>';
      }
    }, 1000);
  }
  change();
});

// Инициализация слайдера benefit-slider
document.querySelectorAll('.benefit__slider').forEach(n => {
  const mySwiperBenefit = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      nextEl: '.benefit .benefit__nav-arrow-next',
      prevEl: '.benefit .benefit__nav-arrow-prev',
    },
    on: {
      slideChange: function () {
        var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
        let offer = n.closest('.benefit').querySelector('.scrollbar__nav-count');
        offer.innerHTML = '<span>0' + (this.activeIndex + 1) + '' + `</span><span>` + '| 0' + (slides_count.length) + '</span>';
      }
    },
    scrollbar: {
      el: '.benefit .swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  function change() {

    setTimeout(function () {
      var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
      let offer_1 = n.closest('.benefit').querySelector('.scrollbar__nav-count');
      if (offer_1) {
        offer_1.innerHTML = '<span>0' + (mySwiperBenefit.activeIndex + 1) + '' + `</span><span>` + '| 0' + (slides_count.length) + '</span>';
      }
    }, 1000);
  }
  change();
});

// Инициализация слайдера whom-slider
document.querySelectorAll('.whom-slider').forEach(n => {
  const mySwiperWhom = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    navigation: {
      nextEl: '.whom .scrollbar__nav-arrow-next',
      prevEl: '.whom .scrollbar__nav-arrow-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    on: {
      slideChange: function () {
        var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
        let offer = n.closest('.whom').querySelector('.scrollbar__nav-count');
        offer.innerHTML = '<span>0' + (this.activeIndex + 1) + '' + `</span><span>` + '| 0' + (slides_count.length) + '</span>';
      }
    },
    scrollbar: {
      el: '.whom .swiper-scrollbar',
      draggable: true,
    },
  });

  function change() {

    setTimeout(function () {
      var slides_count = n.querySelectorAll(".swiper-slide"); // <- add this
      let offer_1 = n.closest('.whom').querySelector('.scrollbar__nav-count');
      if (offer_1) {
        offer_1.innerHTML = '<span>0' + (mySwiperWhom.activeIndex + 1) + '' + `</span><span>` + '| 0' + (slides_count.length) + '</span>';
      }
    }, 1000);
  }
  change();
});


// Burger
const btnMenu = document.querySelector('#toggle');
let btnMenuClose = document.querySelector('#header__mobile-close');
const menu = document.querySelector('.header__nav');
const bodyEl = document.querySelector('body');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();

});
btnMenuClose.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
});

const mediaQuery767 = window.matchMedia('(max-width: 767px)');
if (mediaQuery767.matches) {
  let marketBlockHeadAll = document.querySelectorAll('.marketplace__block-title-wrapper');

  marketBlockHeadAll.forEach(el => {
    let elPar = el.closest('.marketplace__block');
    el.addEventListener('click', () => {
      $(elPar).find('.marketplace__block-text').slideToggle();
      elPar.querySelector('.marketplace__block-title-wrapper').classList.toggle('active');
    });
  });
  marketBlockHeadAll[0].closest('.marketplace__block').classList.add('active');
  marketBlockHeadAll[0].closest('.marketplace__block').querySelector('.marketplace__block-title-wrapper').classList.add('active');
}

