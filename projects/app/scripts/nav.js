// animate on scroll

$(window).on('scroll load', function(){

    var line = $(window).scrollTop(); 

    if ( line >= 300 ) {
        $('nav').addClass('fix-nav');
    }else { $('nav').removeClass('fix-nav'); } 
});
