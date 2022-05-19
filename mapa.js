var map = L.map('map').setView([-34.604121, -58.495029],12)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibW9ycmlzYyIsImEiOiJja3ZvYWlsODkxeTNlMnZ0a3hicGk1aDlhIn0.W19WHC_XrLTh0LujJSoqzA'
}).addTo(map);