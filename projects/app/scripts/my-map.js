$(function(){
    
    
// map
var map = new GMaps({
    div: '.map',
    lat: 47.141531,
    lng: 15.523934
});

map.addMarker({
    lat: 47.141531,
    lng: 15.523934,
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