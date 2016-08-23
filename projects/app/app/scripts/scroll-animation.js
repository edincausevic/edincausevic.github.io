
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

function responsiveAnimations() {

    var windowWidth = $(window).width();

    if ( windowWidth < 450 ) { runAnimations(-100, -150, -100, -100, -100, -50) }
    if ( windowWidth < 767 ) { runAnimations(100, 50, 100, 100, 100, 50) }
    if ( windowWidth < 1023 ) { runAnimations(300, 500, 200, 200, 200, 200) }
    if ( windowWidth < 1200 ) { runAnimations(600, 600, 400, 400, 400, 500) }
    if ( windowWidth > 1200 ) { runAnimations(800, 900, 600, 600, 400, 500) }
}
responsiveAnimations();

function runAnimations(offS1, offS2, offS3, offS4, offS5, offS6) {
    animate('#animate-info', 'top', '70px', offS1, 'top', '0px', '1s');
    animate('#animate-team', 'top', '70px', offS2, 'top', '0px', '1s');
    animate('#animate-video', 'right', '70px', offS3, 'right', '0px', '1s');
    animate('#animate-list', 'left', '70px', offS4, 'left', '0px', '1s');
    animate('#animate-gal', 'top', '70px', offS5, 'top', '0px', '1s');
    animate('#animate-form', 'top', '70px', offS6, 'top', '0px', '1s');
}
