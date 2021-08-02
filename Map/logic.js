
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

 
function markerSize(visitors) {
  return visitors /80;
}

var trailHeads = [
  {
    name: "Appalachian Trail Conservancy",
    location: [39.3254, -77.7405],
    visitors: 3000000,
    area: "West Virginia"
 
  },
  {
    name: "Shenandoah National Park",
    location: [38.4755, -78.4535],
    visitors: 1425507,
    area: "Virgina"  
  },
  {
    name: "Great Smoky Mountains National Park",
    location: [35.6131, -83.5532],
    visitors: 12100000,
    area: "Tennessee" 
  },
  {
    name: "Blue Ridge Mountains",
    location: [35.7647, -82.2653],
    visitors: 15000000,
    area: 'North Carolina' 

  },
  {
    name: "Acadia National Park",
    location: [44.3386, -68.2733],
    visitors: 2669034,
    area: "Maine"
  },
  {
    name: "White Mountains",
    location: [44.1644, -71.4326],
    visitors: 6000000,
    area: 'New Hampshire'
  },
  {
    name: "Pisgah National Forest",
    location: [35.2847, -82.7270],
    visitors: 4600000,
    area: 'North Carolina'
  },
  {
    name: "Old Rag Mountain",
    location: [38.5517, -78.3158],
    visitors: 2000000,
    area: "Virginia"
  },
  {
    name: "New River Gorge National Park and Preserve",
    location: [37.8776, -81.0189],
    visitors: 1128195,
    area: "West Virginia"
    
  },

  {
    name: "Hawksbill Mountain",
    location: [38.5517, -78.3158],
    visitors: 2000000,
    area: 'Virginia'
  
  },

  
];

// Loop through the cities array and create one marker for each city object
for (var i = 0; i < trailHeads.length; i++) {
  L.circle(trailHeads[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its 
    radius: markerSize(trailHeads[i].visitors) // ***** radius is in meters    *******
  }).bindPopup("<h1>" + trailHeads[i].name + "</h1> <hr> <h3>Area: " + trailHeads[i].area + "</h3>").addTo(myMap);
}
