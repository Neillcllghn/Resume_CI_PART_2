function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3, // zoom function on map
        center: { // coordinates
            lat: 46.619261, 
            lng: -33.134766
        }
    });

var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var locations = [ // locations Rosie have been
    { lat: 40.785091, lng: -73.968285 },
    { lat: 41.084045, lng: -73.874245 },
    { lat: 40.754932, lng: -73.984016}
];

//iterate the locations through an array and create a new marker that has the label from our string
var markers = locations.map(function(location, i) { //.map() creates an array and takes two arguments
    return new google.maps.Marker ({
        position: location, // set the current location
        label: labels[i % labels.length] // to get one of the labels out of the string
    });
}) // this returns an array

const markerCluster = new markerClusterer.MarkerClusterer({ map, markers }); // needed to add marker clusters to map

};