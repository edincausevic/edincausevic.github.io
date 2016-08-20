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
        
        var line = $(window).scrollTop() + $(window).width(); console.log(line);
        if ( line >= newElTop && stopIf === false) {
            $(element).css('opacity', '1');
            $(element).css(animePos, animeVal);
            console.log('element ' + $(element).attr('id') +' : ' + newElTop);
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



/*
function animate(element) {

    var el = $(element).offset().top;

    $(element).css('opacity', '0');
    $(element).css('transition', 'all 1s ease-in-out');
    $(element).css('-webkit-transition', 'all 1s ease-in-out');
    $(element).css('position', 'relative');
    $(element).css('top', '50px');

    $(window).on('scroll', function(){

        var line = $(window).scrollTop() + $(window).width();
        if ( line >= el + 500) {
            $(element).css('opacity', '1');
            $(element).css('top', '0px');
            console.log(el);
        } 
    });
}
*/

/*
// animate on scroll
function animate( element, setOpacityVal, setPosition, time, offSetLine) {

    var el = $(element).offset().top;

    $(element).css('opacity', setOpacityVal);
    $(element).css('transition', 'all ' +time+ ' ease-in-out');
    $(element).css('-webkit-transition', 'all ' +time+ ' ease-in-out');
    $(element).css('position', 'relative');
    $(element).css('top', setPosition);

    $(window).on('scroll', function(){

        var line = $(window).scrollTop() + $(window).width();
        if ( line <= el + offSetLine) {
            $(element).css('opacity', '1');
            $(element).css('top', '0px');
        } 
    });
}
//animate( element, setOpacity, setOpacityVal, setPosition, time, offSetLine)
animate('#animate-team', '0', '50px', '1s', '700');
animate('#animate-info', '0', '50px', '1s', '700');
*/