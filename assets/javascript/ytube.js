//pending integration with app.js
var artist = "";

var vidID = [];

var searchArtist = function(artist) {
    //artist is only hardcoded here for testing 
    artist = "The Creepshow";

    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=" + artist + "&type=video&videoCategoryId=10&videoEmbeddable=true&videoSyndicated=true&key=AIzaSyDZC0UpHlq7xyJm8i1XTbhqmNDJ-0EN1XE";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

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

            //playlist version of youtube url for ref "https://www.youtube.com/embed/VIDEO_ID?playlist=VIDEOID_1,VIDEOID_2" -- 'https://www.youtube.com/embed/' + vidID
            
            });

};

searchArtist(artist);