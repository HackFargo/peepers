var map = L.map('map', {
	center: [46.872201, -96.812393],
	maxZoom: 17,
	zoom: 14,
	zoomControl: false
});


// Shane's Mapbox Map
// L.tileLayer('http://b.tiles.mapbox.com/v3/oslek.map-izae70ik/{z}/{x}/{y}.png').addTo(map);
//
// Sri's Mapbox Map
L.tileLayer('http://a.tiles.mapbox.com/v3/sri.hh32e6nd/{z}/{x}/{y}.png').addTo(map);


$.getJSON("http://api.hackfargo.co/calls/type/Peeper?start=6-10-2012&end=3-13-2014",function(data) { 
	$.each(data, function(i, item) {
		var late =item.Lat;
		var lon = item.Long;
		var date = item.Meta.DateString;
		var address = item.Meta.Address;
		var description = "Peeper reported on " + date + " at " + address;
		populatePeepers(late, lon, description);
	});
});


function populatePeepers(lat, lon, description) {
	L.circle([lat, lon], 105.7, {
		color: '',
		fillColor: '#f03',
		fillOpacity: 0.5,
		weight: 1
	}).bindPopup(description).addTo(map);
}
