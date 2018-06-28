// GoogleMaps ApiKey = "AIzaSyDeDFg6f1rJ1FDYNMGD3UeeXKHVA4Bvh_Y"
// (39.360198, -74.420480)
function myMap() {
    // Need to retieve the lat/long from bandsinttown API
    // var lat = 
    // var lng = 
    var myCenter = new google.maps.LatLng(39.360198, -74.420480);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 5};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
    google.maps.event.addListener(marker,'click',function() {
      var infowindow = new google.maps.InfoWindow({
          // Put Adress to concert, time and date 
        content:"Sunday, July 15th, 2018<br>7:00 PM<br>Hard Rock Hotel Casino Atlantic City<br> 1000 Boardwalk, Atlantic City, NJ 08401"
      });
    infowindow.open(map,marker);
    });
  }
