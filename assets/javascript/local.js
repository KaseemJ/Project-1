$(document).ready(function () {  
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        initialSlide: 3,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 3,
              centerMode: true,
              centerPadding: '50px',
              arrows: true,
              slidesToScroll: 1
            }
          },
          {
            breakpoint:600,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
                slidesToScroll: 1
            }
           },
           {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    
    });