$(document).ready(function () {  
    $('.center').slick({
        centerMode: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 3,
              arrows: true,
              slidesToScroll: 1,
              centerMode: true
            }
          },
          {
            breakpoint:600,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
           },
           {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    
    });