import 'slick-carousel';

export class App{

  init() {

    $('.large-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 1,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: true
              }
          }
      ]
  });

  /* related products slider */
  $('.logos-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 400,
      autoplay: true,
      slidesToShow: 6,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 5,
                  arrows: false,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 3,
              }
          }
      ]
  });

  /* related products slider */
  $('.news-slider').slick({
      dots: false,
      arrows: false,
      infinite: false,
      speed: 400,
      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  arrows: false,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 640,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  });



  }

  slickSLider (){

  }

}