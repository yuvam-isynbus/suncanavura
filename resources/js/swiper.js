import Swiper, { Navigation, Pagination, Lazy } from 'swiper';


var swiper = new Swiper('.slider-hero', {
    modules: [Navigation, Pagination, Lazy],
    slidesPerView: 1,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    preloadImages: false,
    lazy: {
        loadPrevNext: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-unique-hero',
      prevEl: '.swiper-button-prev-unique-hero',
    },
});

var swiper = new Swiper('.slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    // observer: true,
    // observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
    },
    breakpoints: {
        640: {
        slidesPerView: 3,
        spaceBetween: 20
        },
    },
  });

var swiper = new Swiper('.slider-top-ponuda', {
  modules: [Navigation, Pagination, Lazy],
  slidesPerView: 1,
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  preloadImages: false,
  lazy: {
      loadPrevNext: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-unique-top',
    prevEl: '.swiper-button-prev-unique-top',
  },
  breakpoints: {
    640: {
        slidesPerView: 3,
        spaceBetween: 20
    },
  },
});

var swiper = new Swiper('.slider-zaposleni', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-button-next-unique-zaposleni',
    prevEl: '.swiper-button-prev-unique-zaposleni',
  },
  breakpoints: {
    640: {
        slidesPerView: 3,
        spaceBetween: 20
    },
  },
});
