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

            localStorage.setItem("IP-Address", userIP);
            localStorage.setItem("City", userCity);
            localStorage.setItem("Latitude", userLat);
            localStorage.setItem("Longitude", userLong);
//in progress, to be integrated once completed
    var Lat = localStorage.getItem("Latitude");
    var Long = localStorage.getItem("Longitude");
var searchVenue = function(userIP) {
    
    $("#userLoc").text(userCity);
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
            console.log(eventImage);
            console.log(eventVenue);
            console.log(eventLat);
            console.log(eventLong);
            console.log(eventURL);
    
            // $("#bandIMG" + (i + 1)).html(eventImage);
            $(`#cardH${i}`).text(eventVenue);
            $(`#bandIMG${i}`).attr({
                src : eventImage,
                width : "220px",
                height : "175px"
            });
            $(`#cardp${i}`).text(eventName);
            $(`#eventLink${i}`).attr("href", eventURL);
            // <a href="https://www.bandsintown.com/a/26082-the-smashing-pumpkins?came_from=257&amp;utm_medium=web&amp;utm_source=home&amp;utm_campaign=top_event">The Smashing Pumpkins</a>
        }
        for (let i = 0; i < results.length; i++) {
            
            if(results[i].popularity > popularArray[0].popularity || popularArray.length === 0) {
                popularArray.unshift(results[i]);
            } else {
                popularArray.push(results[i]);
            }
            
        }
        console.log(popularArray);


        // var newCard = `
        // <div>
        //     <div class="row">
        //         <div class="col s3">
        //             <section class="card" id="card${i + 1}">
        //                 <section class="card-image" id="cardImg${i + 1}">
        //                     <img src="${eventImage}" id="bandIMG${i + 1}">
        //                     <span class="${eventName}" id="cardH1">${eventName}</span>
        //                 </section>
        //                 <section class="card-action" id="cardAction1">
        //                     <a href="${eventURL}">This is a link</a>
        //                 </section>
        //                 <section class="card-content">
        //                     <p  id="cardp1">Venue Location</p>
        //                 </section>            
        //             </section>
        //         </div>
        //     </div>
        // </div>
        // `;

        // $("#cardScroller").append(newCard);


        // var slider = $('.center').slick({
        //     centerMode: true,
        //     centerPadding: '60px',
        //     arrows: false,
        //     dots: true,
        //     fade: true,
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     infinite: true,
        //     autoplay: true,
        //     autoplaySpeed: 2000,
        //     pauseOnHover: true,
        //     adaptiveHeight: true,
        //     variableWidth: true,
        //     responsive: [
        //       {
        //         breakpoint: 780,
        //         settings: {
        //           slidesToShow: 3,
        //           centerMode: true,
        //           centerPadding: '50px',
        //           arrows: true,
        //           slidesToScroll: 1
        //         }
        //       },
        //       {
        //         breakpoint:600,
        //         settings: {
        //             arrows: true,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 3,
        //             slidesToScroll: 1
        //         }
        //        },
        //        {
        //         breakpoint: 480,
        //         settings: {
        //           arrows: false,
        //           centerMode: true,
        //           centerPadding: '40px',
        //           slidesToShow: 1,
        //           slidesToScroll: 1
        //         }
        //       }
        //     ]
        // });
        
        // setTimeout(slider, 500);
        

        
    });
};

searchVenue(userIP);

}
});

$("#toggleS").click(function() {
    event.preventDefault();
    $("#sBox").toggle();
    $("input[type='text']").focus();
  });


});