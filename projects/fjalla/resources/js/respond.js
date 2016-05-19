$(document).ready(function(){
    
    /*--  MAPS  --*/
    var map = new GMaps({
      div: '.map',
      lat: 40.7240011,
      lng: -73.9939289,
      zoom: 12
    });
    
    map.addMarker({
      lat: 40.7240011,
      lng: -73.9939289,
      title: 'New York',
      infoWindow: {
          content: '<p>FjallaOne</p>'
        }
    });

});

    
    
