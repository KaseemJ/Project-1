var artist = $("#artist-input").val().trim();

var bandBio = function(artist) {

    artist = 'The Creepshow';

var queryURL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artist + '&api_key=340e93707fc8052b38b0c5c76c4b3199&format=json';

$.ajax({
    type : 'POST',
    url : queryURL,
    dataType : 'jsonp',
    success : function(data) {
        console.log(data);
        $('.artistBio #artistName').html(data.artist.name);
        $('.artistBio #artistImage').html('<img src="' + data.artist.image[2]['#text'] + '" />');
        $('.artistBio #artistBio').html(data.artist.bio.content);
    },
    error : function(code, message){
        $('#error').html('Error Code: ' + code + ', Error Message: ' + message);            
    }
});
};
bandBio();