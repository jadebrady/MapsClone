
mapboxgl.accessToken = 
'pk.eyJ1IjoiamFkZWJyYWR5IiwiYSI6ImNsdXJxOTN6MjA5cmUyanBjbDNhaGozb3kifQ.LqUE2C4dvaD8s6Jl5Lny3Q';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)


    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric"
    });

    map.addControl(directions, 'top-left');


}
