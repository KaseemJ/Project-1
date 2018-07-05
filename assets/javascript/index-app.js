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