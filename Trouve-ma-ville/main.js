function meteo() {
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast?id=2972314&APPID=421e1555bbe68590791b9f3fa7760e5c&units=metric",function(data){
        var celsius = data.list[0].main.temp;
        var desc = data.list[0].weather[0].description;
        $("#temperature").html("La temperature est de : " + celsius + "°C" + "<br>" + "Le temps est : " + desc);
    });
};


function adresse() {
    $.getJSON("http://www.mapquestapi.com/geocoding/v1/address?key=wIXBItz310IBQzotLvgfDUUlivCCrVi2&location=Saint-Gaudens,fr",function(data){
        var latitude = data.results[0].locations[0].latLng.lat;
        var longitude = data.results[0].locations[0].latLng.lng;
        $("#geo").html("Latitude : " + latitude + "<br>" + "Longitude : " + longitude);
    });
};

function itineraire() {
    $.getJSON("https://www.mapquestapi.com/directions/v2/route?key=wIXBItz310IBQzotLvgfDUUlivCCrVi2&from=saint+gaudens&to=toulouse&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false&units=metric",function(data){
        var dist = data.route.distance * 1.6;
        var time = data.route.formattedTime;
        $("#itin").html("La distance entre Saint-Gaudens et Toulouse est de : " + dist + "Km" + "<br>" + "Temps du trajet : " + time);
    });
}


