/*Slick Slider*/
$(".mother-board-wrapper").slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 2000,
  dots: false,
  arrows: false,
  pauseOnHover: false,

  responsive: [
    {
      breakpoint: 898,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
