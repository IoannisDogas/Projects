/* myLoc.js */

/*var watchId = null;
var map = null;
var ourCoords =  {
    latitude: 37.998571,
    longitude:23.758297
};
var prevCoords = null;

window.onload = getMyLocation;

function getMyLocation() {
	if (navigator.geolocation) {
		var watchButton = document.getElementById("watch");
		watchButton.onclick = watchLocation;
		var clearWatchButton = document.getElementById("clearWatch");
		clearWatchButton.onclick = clearWatch;
	}
	else {
		alert("Oops, no geolocation support");
	}
}

function displayLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	var div = document.getElementById("location");
	div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
	div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";

	var km = computeDistance(position.coords, ourCoords);
	var distance = document.getElementById("distance");
	distance.innerHTML = "You are " + km + " km from nearest Braid dealer.";

	if (map == null) {
		showMap(position.coords);
		prevCoords = position.coords;
	}
	else {
		var meters = computeDistance(position.coords, prevCoords) * 1000;
		if (meters > 20) {
			scrollMapToPosition(position.coords);
			prevCoords = position.coords;
		}
	}
}


// --------------------- Ready Bake ------------------
//
// Uses the Spherical Law of Cosines to find the distance
// between two lat/long points
//
function computeDistance(startCoords, destCoords) {
	var startLatRads = degreesToRadians(startCoords.latitude);
	var startLongRads = degreesToRadians(startCoords.longitude);
	var destLatRads = degreesToRadians(destCoords.latitude);
	var destLongRads = degreesToRadians(destCoords.longitude);

	var Radius = 6371; // radius of the Earth in km
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
					Math.cos(startLatRads) * Math.cos(destLatRads) *
					Math.cos(startLongRads - destLongRads)) * Radius;

	return distance;
}

function degreesToRadians(degrees) {
	radians = (degrees * Math.PI)/180;
	return radians;
}

// ------------------ End Ready Bake -----------------

function showMap(coords) {
	var googleLatAndLong = new google.maps.LatLng(coords.latitude, 
												  coords.longitude);
	var mapOptions = {
		zoom: 10,
		center: googleLatAndLong,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapDiv = document.getElementById("map");
	map = new google.maps.Map(mapDiv, mapOptions);

	// add the user marker
	var title = "Your Location";
	var content = "You are here: " + coords.latitude + ", " + coords.longitude;
	addMarker(map, googleLatAndLong, title, content);
}

function addMarker(map, latlong, title, content) {
	var markerOptions = {
		position: latlong,
		map: map,
		title: title,
		clickable: true
	};
	var marker = new google.maps.Marker(markerOptions);

	var infoWindowOptions = {
		content: content,
		position: latlong
	};

	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.open(map);
	});
}


function displayError(error) {
	var errorTypes = {
		0: "Unknown error",
		1: "Permission denied",
		2: "Position is not available",
		3: "Request timeout"
	};
	var errorMessage = errorTypes[error.code];
	if (error.code == 0 || error.code == 2) {
		errorMessage = errorMessage + " " + error.message;
	}
	var div = document.getElementById("location");
	div.innerHTML = errorMessage;
}

//
// Code to watch the user's location
//
function watchLocation() {
	watchId = navigator.geolocation.watchPosition(
					displayLocation, 
					displayError);
}

function scrollMapToPosition(coords) {
	var latitude = coords.latitude;
	var longitude = coords.longitude;

	var latlong = new google.maps.LatLng(latitude, longitude);
	map.panTo(latlong);

	// add the new marker
	addMarker(map, latlong, "Your new location", "You moved to: " + 
								latitude + ", " + longitude);
}

function clearWatch() {
	if (watchId) {
		navigator.geolocation.clearWatch(watchId);
		watchId = null;
	}
}*/


function initMap() {

    const braidSpain = { lat: 41.588528, lng: 1.624391 };
    const braidGreece = { lat: 37.998571, lng: 23.758297 };
    const braidUsa = { lat: 45.5820500, lng: -122.6824350 };    

    
    let coords = document.getElementById("dealersList").value;

    if (coords === "spain") {
       let braidDealer = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: braidSpain
        });

        let dealerMarker = new google.maps.Marker({
            position: braidSpain,
            title: "Braid Spain",
            map: braidDealer
        });

       /* braidDealer.center = braidSpain;
        dealerMarker.position = braidSpain;
        dealerMarker.title = "Braid Spain";*/

    } else if (coords === "greece") {

        let braidDealer = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: braidGreece
        });

        let dealerMarker = new google.maps.Marker({
            position: braidGreece,
            title: "Braid Greece",
            map: braidDealer
        });


        /*braidDealer.center = braidGreece;
        dealerMarker.position = braidGreece;
        dealerMarker.title = "Braid Greece";*/
    } else if (coords === "usa") {

        let braidDealer = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: braidUsa
        });


        let dealerMarker = new google.maps.Marker({
            position: braidUsa,
            title: "Braid Usa",
            map: braidDealer
        });


        /*braidDealer.center = braidUsa;
        dealerMarker.position = braidUsa;
        dealerMarker.title = "Braid Usa";*/
    }
    


    /*var braidSpain = { lat: 41.588528, lng: 1.624391 };
    var mapSpain = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: braidSpain
    });
   

    var markerSpain = new google.maps.Marker({
        position: braidSpain,
        title:"Braid HQ Spain",
        map: mapSpain
    });*/

    

   /* var braidGreece = { lat: 37.998571, lng: 23.758297 };
    var mapGreece = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: braidGreece
    });

    var markerGreece = new google.maps.Marker({
        position: braidGreece,
        title: "Braid Greece",
        map: mapGreece
    });*/
}
