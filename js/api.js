

var map = L.map('map');/*.setView([40.2838, -3.8215], 13); */


L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{
             attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',      
     maxZoom: 18
}).addTo(map);

/* Para meter el marco 
L.marker([40.2838, -3.8215]).addTo(map)  
    .bindPopup(' Universidad Rey Juan Carlos, Aulario III')
    .openPopup(); */

/* Meter un Popup, de tal forma que al clikear sobre el mapa se muestren las coordenadas del sitio */
var popup = L.popup();

/* CallBack que se ejecuta al clikear sobre el mapa */
function onMapClick(e) {
    popup.setLatLng(e.latlng).setContent("Coordenadas " + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {

    var radius = e.accuracy / 2;


    L.marker(e.latlng).addTo(map)
        .bindPopup("Tu ubicación actual es esta, con una precisión de " + radius + " metros ").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);


