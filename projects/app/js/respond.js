
// page scroll
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


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