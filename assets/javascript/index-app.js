// When the user enters in an artists name and hits submit, I need to store the string in local storage, and redirect the user to the 'artist' page. I need to pull the string before the page loads and load all the info on page. 
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
$(document).ready(function() {

    
    // set endpoint and your access key
    var access_key = '74fe99bba3ae89c11ba16b240a3ce38a';

    // get the API result via jQuery.ajax
    $.ajax({
        url: 'http://api.ipstack.com/check?access_key=' + access_key,   
        dataType: 'jsonp',
        success: function(json) {
            console.log(json);
            // output the "capital" object inside "location"
            // console.log(json.location.capital);
            console.log(json.ip);
            var userIP = json.ip;
            var userCity = json.city;
            var userLat = json.latitude;
            var userLong =  json.longitude;
            var userIP;
            var userCity;
            
            localStorage.setItem("IP-Address", userIP);
            localStorage.setItem("City", userCity);
            localStorage.setItem("Latitude", userLat);
            localStorage.setItem("Longitude", userLong);
//in progress, to be integrated once completed
    var city = localStorage.getItem("City");
    var Lat = localStorage.getItem("Latitude");
    var Long = localStorage.getItem("Longitude");
    console.log(Lat);
    console.log(Long);
var searchVenue = function(userIP) {
    
    $("#userLoc").text(city);
    var popularArray = [];

    var queryURL = 
    'https://api.seatgeek.com/2/events?lat=' + Lat + '&lon=' + Long + '&per_page=500&range=10mi&taxonomies.name=concert&client_id=MTIxMzMwNDJ8MTUzMDU1NjA1OS4wNA';
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // Printing the entire object to console
        console.log(response);
        var results = response.events;

        for(var i = 1; i <= 6; i++){
            var eventName = results[i].performers[0].name;
            var eventImage = results[i].performers[0].images.huge;
            var eventVenue = results[i].venue.name;
            var eventLat = results[i].venue.location.lat;
            var eventLong = results[i].venue.location.lon;
            var eventURL = results[i].url;
            console.log("Event: " + eventName);
            // console.log(eventImage);
            console.log(eventVenue);
            console.log(eventLat);
            console.log(eventLong);
            console.log(eventURL);
    
            // $("#bandIMG" + (i + 1)).html(eventImage);
            $(`#cardH${i}`).text(eventVenue);
            $(`#cardp${i}`).text(eventName);
            $(`#eventLink${i}`).attr("href", eventURL);
            console.log(results[i].performers[0].images.huge);
            if(results[i].performers[0].images.huge === undefined) {
                eventImage = "assets/images/retroMic.jpg";
                console.log(eventImage);
                $("#bandIMG" + i).attr({
                    src : "assets/images/retroMic.jpg",
                    width: "280px",
                    height: "210px"
                });
            }else {
                eventImage = results[i].performers[0].images.huge;
            }
            $(`#bandIMG${i}`).attr("src", eventImage);
            console.log(eventImage);

            // <a href="https://www.bandsintown.com/a/26082-the-smashing-pumpkins?came_from=257&amp;utm_medium=web&amp;utm_source=home&amp;utm_campaign=top_event">The Smashing Pumpkins</a>
        }
        for (let i = 0; i < results.length; i++) {
            
            if(results[i].popularity > popularArray[0].popularity || popularArray.length === 0) {
                popularArray.unshift(results[i]);
            } else {
                popularArray.push(results[i]);
            }
            console.log(popularArray);
        }
        

    });
};

searchVenue(userIP);

}
});

var locSearch = `
<div id="sBox">
<form class="searchLocation">
    <div class="input-fieldL">
        <input id="search" placeholder="Search For Events in Your City" type="search" required>
    </div>
</form>
</div>
`;

$("#toggleS").click(function() {
    event.preventDefault();
    // $("#sBox").toggle();
    // $("input[type='text']").focus();
    $("#userLoc").html(locSearch);
});


});