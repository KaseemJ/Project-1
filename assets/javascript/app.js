

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



// searchBandsInTown populates the accordion with concerts
function searchBandsInTown(artist) {

  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  $.ajax({
      url: queryURL,
      method: "GET",
      error: function(err){
          $('.modal').modal();
      $('#invalidModal').modal('open');
      }
      
  }).then(function (response) {


      // puts the lat/lng onto each accordion
      myMap(response[0].venue.latitude, response[0].venue.longitude);
      for (var i = 0; i < 10; i++) {

          console.log(response[i]);

          // Converts the time given into (weekday/mm/dd/YYYY/Time)
          var dateTimeString = (response[i].datetime);
          dateTimeString = (moment(dateTimeString).format('llll'));

          // Converts time given into countdown
          var countDown = (response[i].datetime);
          countDown = (moment(countDown).fromNow());


          // This block of code will define each concert in the accordion, Ideally we will loop through this block to populate the webpage. I broke each element of the accordion into seperate strings so that it is easier to manipulate. Still need to use moment.js to calculate number of days till concert. 

          // Need to determine day, month, year ex) may 23, 2018 7pm
          var headerString = ("<div class='collapsible-header'><i class='material-icons'>location_on</i>" + response[i].venue.city + ", " + response[i].venue.country + " &nbsp;&nbsp;    <i class='material-icons'>event</i>     " + dateTimeString + "</div>");

          var paragraphString = ("<p>Ticket Avaliablity: " + response[i].offers[0].status + "<br>Time Till Concert: " + countDown + "<br>Ticket Link: <a href='" + response[i].offers[0].url + "'> Click Here</a><br>Location: " + response[i].venue.country + ", " + response[i].venue.city + ", " + response[i].venue.name + "</p>");

          var bodyString = ("<div class='collapsible-body'><span>" + paragraphString + "</span></div>");

          var concertString = ("<li class='concert' data-lat=" + response[i].venue.latitude + " data-lng=" + response[i].venue.longitude + " > " + headerString + " " + bodyString + " </li>");

          // adds the entire concert to the DOM 
          $("#concert-div").append(concertString);
      }
  });
}

// Everytime we click on a concert inside the accordion, the google map will update to the concert location
$("#concert-div").on('click', '.concert', function () {
  var lat = parseFloat($(this).attr("data-lat"));
  var lng = parseFloat($(this).attr("data-lng"));
  console.log(lat, lng);
  myMap(lat, lng);
});


// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function (event) {
  event.preventDefault();
  var inputArtist = $("#artist-input").val().trim();
  // If they hit search without typing anything, make a placeHolder saying "you didnt input anything"
  if(inputArtist == ""){
      // Maybe alert using modal 
      // need to put a placeholder on textbox id="artist-input"
      $('.modal').modal();
      $('#emptyModal').modal('open');
  }
  else{
      // Clear the div id="concert-div"
  $('#concert-div').empty();
  searchBandsInTown(inputArtist);
  }
});

// Allows the "Materialize" accordion to expand 'on-click'
$(document).ready(function () {
  $('.collapsible').collapsible();
});
