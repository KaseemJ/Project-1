// myMap Function generates the google Map
function myMap(lat, lng) {
    var myCenter = new google.maps.LatLng(lat, lng);
    var mapCanvas = document.getElementById("map");
    var mapOptions = { center: myCenter, zoom: 5 };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({ position: myCenter });
    marker.setMap(map);
    google.maps.event.addListener(marker, 'click', function () {
        var infowindow = new google.maps.InfoWindow({
            // Put Adress to concert, time and date 
            content: ("Latitude: " + lat + "<br>Longitude: " + lng)
        });
        infowindow.open(map, marker);
    });
}



// searchBandsInTown populates the accordion with concerts
function searchBandsInTown(artist) {

    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    $.ajax({
        url: queryURL,
        method: "GET",
        error: function (err) {
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
})



// Allows the "Materialize" accordion to expand 'on-click'
$(document).ready(function () {
    $('.collapsible').collapsible();
    var artistString = localStorage.getItem("searchInput");
    if (artistString == "") {
        $('.modal').modal();
        $('#emptyModal').modal('open');
    }
    else {
        searchBandsInTown(artistString);
        bandBio(artistString);
        searchArtist(artistString);
    }
});


// This is Cory's BIO function
var bandBio = function (artist) {

    var queryURL = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artist + '&api_key=340e93707fc8052b38b0c5c76c4b3199&format=json';

    $.ajax({
        type: 'POST',
        url: queryURL,
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            $('.artistBio #artistName').html(data.artist.name);
            $('.artistBio #artistImage').html('<img src="' + data.artist.image[2]['#text'] + '" />');
            $('.artistBio #artistBio').html(data.artist.bio.content);
        },
        error: function (code, message) {
            $('#error').html('Error Code: ' + code + ', Error Message: ' + message);
        }
    });
};


// this is cory's youtube javascript
var searchArtist = function (artist) {

    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=" + artist + "&type=video&videoCategoryId=10&videoEmbeddable=true&videoSyndicated=true&key=AIzaSyDZC0UpHlq7xyJm8i1XTbhqmNDJ-0EN1XE";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Printing the entire object to console
        console.log(response);
        var results = response.items;

        vidID_0 = results[0].id.videoId;
        vidID_1 = results[1].id.videoId;
        vidID_2 = results[2].id.videoId;
        vidID_3 = results[3].id.videoId;
        vidID_4 = results[4].id.videoId;
        vidID_5 = results[5].id.videoId;
        vidID_6 = results[6].id.videoId;
        vidID_7 = results[7].id.videoId;
        vidID_8 = results[8].id.videoId;
        vidID_9 = results[9].id.videoId;
        $("#iframePlayer").attr("src",
            'https://www.youtube.com/embed/' + vidID_0 + '?version=3&loop=1&autoplay=1&playlist=' + vidID_1 + ',' + vidID_2 + ',' + vidID_3 + ',' + vidID_4 + ',' + vidID_5 + ',' + vidID_6 + ',' + vidID_7 + ',' + vidID_8 + ',' + vidID_9);
        console.log(vidID);
    });
};

// this handles the 'enter' function of the search bar
$('#search').keypress(function (e) {
    // If the user hits the enter button 
    if (e.keyCode == 13) {
        event.preventDefault();

        // need to store the searchInput inside the local storage
        var str = $('#search').val().trim();
        localStorage.clear();
        localStorage.setItem("searchInput", str);

        // need to redirect to the artist concert page
        window.location = "artist.html";
    }
});
