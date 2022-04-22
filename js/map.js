let map;

function initMap() {

    const LatLng = { lat: 50.37150004740581, lng: 13.787847486233012 };
  
    map = new google.maps.Map(document.getElementById("map"), {
        center: LatLng,
        zoom: 13,
        });

    const image =
        "./pics/logo_75px.png";

    var marker = new google.maps.Marker({
        position: LatLng,
        map,
        title: "Doggoland z.s.",
        icon: image,
        });
    
        marker.setMap(map);
}