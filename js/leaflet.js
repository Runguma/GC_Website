var map = L.map('map').setView([- 0.1965, 37.8238], 10);  

// create a tile layer sourced from mapbox
L.tileLayer('https://api.mapbox.com/styles/v1/unrunguma/ckhw8jy0914hx19pqe3aaem6o/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidW5ydW5ndW1hIiwiYSI6ImNraDMzdHFybDBsMGozMGxzbnNjODJrdWMifQ.xSO0uCJfC4jND_q5-b2TAA').addTo(map);	



map.setView([- 0.1965, 37.8238]);

// Define an icon called cssIcon
var cssIcon = L.divIcon({
  // Specify a class name we can refer to in CSS.
  className: 'css-icon',
  html: '<div class="gps_ring"></div>'
  // Set marker width and height
  ,iconSize: [22,22]
  // ,iconAnchor: [11,11]
});

// specify popup options 
var customOptions =
    {

    'maxWidth': '271',
    'className' : 'popupCustom'
    }

// Create three markers and set their icons to cssIcon
L.marker([- 0.2965, 37.8238], {icon: cssIcon}).addTo(map);

var marker = L.marker([- 0.3020, 37.8288], {})
.addTo(map)
.bindPopup("<h4><u><b>Tharaka Nithi County</b></u></h4><i>Tharaka-Nithi County is one of the forty-seven (47) counties in Kenya created by the Constitution of Kenya, 2010.</i><br> <a href='https://en.wikipedia.org/wiki/Tharaka-Nithi_County' target='_blank' rel='noopener noreferrer'>Visit Wikipedia</a> | <a href='https://tharakanithi.go.ke' target='_blank' rel='noopener noreferrer'>Visit County Website</a>")
.openPopup();


var custom = L.icon({"iconSize": [18, 18], "iconUrl": "https://api.geoapify.com/v1/icon/?type=circle&color=%23999999&icon=landmark&iconType=awesome&iconSize=small&noShadow&noWhiteCircle&apiKey=971d971b3d0f4991adcaeb3f0f94c1d9"});
marker.setIcon(custom);