;
(function() {
  const reviewsSwiper = new Swiper('.reviews .swiper-container', {
    speed: 400,
    slidesPerColumnFill: 'row',
    freeMode: true,
    navContainer: {
      el: '.swiper-arrows',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    }
  });
})();