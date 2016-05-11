// define globals
alert("hi");
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;

$(document).on("ready", function() {

	initMap();
 	$quakesList = $.ajax( {
	method:"GET",
	url: weekly_quakes_endpoint
})
 	.done (function(data) {
 		// console.log(data);

 		var earthquake = data.features;

 		var source = $("#quakes-template").html();
 		// console.log("lat" + data.features[0].geometry.coordinates[0]);
 	
 		template = Handlebars.compile(source);
 		
 		var quakesTemplate = template({quakes: earthquake});

 		$("#info").append(quakesTemplate);
 });
});

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 3
});
      }