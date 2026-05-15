var swiper = new Swiper(".popup-zone .swiper ", {
      slidesPerView: 'auto', //cdn 슬라이더 너비 고정 초기화
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },

    });