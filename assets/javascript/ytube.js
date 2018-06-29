var artist = "";

var vidID = [];

var searchArtist = function(artist) {
    artist = "The Creepshow";

    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=" + artist + "&type=video&videoCategoryId=10&videoEmbeddable=true&videoSyndicated=true&key=AIzaSyDZC0UpHlq7xyJm8i1XTbhqmNDJ-0EN1XE";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        // Printing the entire object to console
        console.log(response);
        var results = response.items;

        //for(i = 0; i < results.length; i++) {
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

            //playlist version of youtube url "https://www.youtube.com/embed/VIDEO_ID?playlist=VIDEOID_1,VIDEOID_2" -- 'https://www.youtube.com/embed/' + vidID
            // // 2. This code loads the IFrame Player API code asynchronously.
            // var tag = document.createElement('script');

            // // var _src = $("#iframePlayer").attr("src");


            // tag.src = "https://www.youtube.com/iframe_api";
            // var firstScriptTag = document.getElementsByTagName('script')[0];
            // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            // // 3. This function creates an <iframe> (and YouTube player)
            // //    after the API code downloads.
            // var player;
            // function onYouTubeIframeAPIReady() {
            // player = new YT.Player('player', {
            //     height: '390',
            //     width: '640',
            //     videoId: vidID,
            //     events: {
            //     'onReady': onPlayerReady,
            //     'onStateChange': onPlayerStateChange
            //     }
            // });
            // }

            // // 4. The API will call this function when the video player is ready.
            // function onPlayerReady(event) {
            // event.target.playVideo();
            // }

            // // 5. The API calls this function when the player's state changes.
            // //    The function indicates that when playing a video (state=1),
            // //    the player should play for six seconds and then stop.
            // var done = false;
            // function onPlayerStateChange(event) {
            // if (event.data == YT.PlayerState.PLAYING && !done) {
            //     setTimeout(stopVideo, 6000);
            //     done = true;
            // }
            // }
            // function stopVideo() {
            // player.stopVideo();
            // }
            //};

            
            });

};

searchArtist(artist);
