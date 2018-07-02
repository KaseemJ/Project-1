//in progress, to be integrated once completed
var artist = "";

var searchVenue = function(artist) {
    artist = "The Creepshow";

    var queryURL = 'https://api.seatgeek.com/2/events?geoip=true?client_id=MTIxMzMwNDJ8MTUzMDU1NjA1OS4wNA';
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        // Printing the entire object to console
        console.log(response);
        var results = response.items;
    });
};

searchVenue(artist);