    // set endpoint and your access key
    var access_key = '74fe99bba3ae89c11ba16b240a3ce38a';

    // get the API result via jQuery.ajax
    $.ajax({
        url: 'http://api.ipstack.com/check?access_key=' + access_key,   
        dataType: 'jsonp',
        success: function(json) {
    
            // output the "capital" object inside "location"
            // console.log(json.location.capital);
            console.log(json.ip);
            var userIP = json.ip;
            var userLat = json.latitude;
            var userLong =  json.longitude;

//in progress, to be integrated once completed
var artist = "";

var searchVenue = function(userIP) {
    artist = "The Creepshow";

    var queryURL = 
    'https://api.seatgeek.com/2/events?lat=' + userLat + '&lon=' + userLong + '&per_page=500&range=10mi&taxonomies.name=concert&client_id=MTIxMzMwNDJ8MTUzMDU1NjA1OS4wNA';
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        // Printing the entire object to console
        console.log(response);
        var results = response.items;
    });
};

searchVenue(userIP);

}
});
