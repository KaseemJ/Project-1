$(document).ready(function () {  
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: true,
    variableWidth: true,
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
// var map;
// var service;
// var infowindow;
// var request = {
//     query: 'Museum of Contemporary Art Australia',
//     fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],

//   service = new google.maps.places.PlacesService(map);
//   service.findPlaceFromQuery(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }