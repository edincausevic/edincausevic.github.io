$(function(){
    
    
// map
var map = new GMaps({
    div: '.map',
    lat: 47.0715048,
    lng: 15.4388594
});

map.addMarker({
    lat: 47.0715048,
    lng: 15.4388594,
    title: 'Graz',
    infoWindow: {
        content: '<p>Dr Hofer</p>'
    }
});

// use the map
$('#map-btn').on('click', function(){

    // show and hide transparent cover
    $('.map-cover').toggle();
    $('.map-btn-text').fadeToggle();
});
    
});    