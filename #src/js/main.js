$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});




/* Инициализировали наш слайдер */
new Swiper('.image-slider', {
  loop: false,           /* Делаем слайдер бесконечным */
  slidesPerView: 3,    /* Кол-во слайдов, которые мы увидим за раз */
  spaceBetween: 30,     /* Отступы между слайдами */
  // slidesToShow: 0,     //сколько слайдов показывать в карусели
  // slidesToScroll: 2,  // сколько слайдов прокручивать за раз
  // centeredSlides: true, /* Активный слайдер будет в центре */
  // initialSlide: 1,   /* Указываем, какой слайдер будет первым по счету */
  /* эффекты */
  effect: 'slide',
  // effect: 'coverflow',
  // effect: 'cube',
  // effect: 'fade',
  // effect: 'flip',

  grabCursor: true,
  // longSwipesMs: 400,
  // slidesToShow: 3,
  // SlidesToScroll: 1,
  // SlidesPerRow: 3,
  autoplay: false,
  // delay: 3000,

  navigation: {
    nextEl: '.swiper__button--wrap .swiper-button-next-our-places',
    prevEl: '.swiper__button--wrap .swiper-button-prev-our-places',
  },

  // Буллеты, текущее положение, прогрессбар
  pagination: {
    el: '.slider__main .swiper-pagination-our-places',
    // type: "fraction",
    // Буллеты 
    clickable: true,
    // Динамические буллиты
    // dynamicBullets: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
