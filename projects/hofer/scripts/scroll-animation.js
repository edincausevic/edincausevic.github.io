
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
        
        var line = $(window).scrollTop() + $(window).height(); 
        
        if ( line >= newElTop && stopIf === false) {
            $(element).css('opacity', '1');
            $(element).css(animePos, animeVal);
            stopIf = true;
        }
    });
    
}

function responsiveAnimations() {

    var windowWidth = $(window).height();
    
    if ( windowWidth < 450 ) { runAnimations(-100, -150, -100, -100, -100, 450) }
    else if ( windowWidth < 767 ) { runAnimations(100, 50, 100, 100, 100, 100) }
    else if ( windowWidth < 1023 ) { runAnimations(200, 500, 200, 200, 400, 600) }
    else if ( windowWidth < 1200 ) { runAnimations(600, 650, 500, 500, 400, 700) }
    else if ( windowWidth > 1200 ) { runAnimations(800, 900, 600, 600, 800, 1000) }
}
responsiveAnimations();

function runAnimations(offS1, offS2, offS3, offS4, offS5, offS6) {
    
    // animate(element, position, value, offsetBottom, animePos, animeVal, time)
    animate('#animate-info', 'top', '70px', offS1, 'top', '0px', '1s');
    animate('#animate-team', 'top', '70px', offS2, 'top', '0px', '1s');
    animate('#animate-video', 'right', '70px', offS3, 'right', '0px', '1s');
    animate('#animate-list', 'left', '70px', offS4, 'left', '0px', '1s');
    animate('#animate-gal', 'top', '70px', offS5, 'top', '0px', '1s');
    animate('#animate-form', 'top', '70px', offS6, 'top', '0px', '1s');   
}
