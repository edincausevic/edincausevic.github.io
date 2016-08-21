// animate on scroll
function animate(element, position, value, offsetBottom, animePos, animeVal, time) {

    var elTop = $(element).offset().top;
    var newElTop = parseInt(elTop + offsetBottom);
    var stopIf = false;
    
    $(element).css('opacity', '0');
    $(element).css('transition', 'all ' +time+ ' ease-in-out');
    $(element).css('-webkit-transition', 'all ' +time+ ' ease-in-out');
    $(element).css('position', 'relative');
    $(element).css(position, value);
   
    
    $(window).on('scroll load', function(){
        
        var line = $(window).scrollTop() + $(window).width(); 
        if ( line >= newElTop && stopIf === false) {
            $(element).css('opacity', '1');
            $(element).css(animePos, animeVal);
            stopIf = true;
        } 
    });
}
animate('#animate-info', 'top', '70px', 700, 'top', '0px', '1s');
animate('#animate-team', 'top', '70px', 800, 'top', '0px', '1s');
animate('#animate-video', 'right', '70px', 700, 'right', '0px', '1s');
animate('#animate-list', 'left', '70px', 700, 'left', '0px', '1s');
animate('#animate-gal1', 'top', '70px', 800, 'top', '0px', '1s');
animate('#animate-gal2', 'top', '70px', 900, 'top', '0px', '1s');
animate('#animate-form', 'top', '70px', 700, 'top', '0px', '1s');

