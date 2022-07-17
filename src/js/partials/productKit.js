function productKitSlider() {
  let promoSwiper = new Swiper('.kit-slider .swiper-container', {
    loop: false,
    // effect: 'fade',
    // spaceBetween: 15,
    watchOverflow: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        spaceBetween: 20
      }
    }
  });
}