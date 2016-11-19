// animate on scroll

$(window).on('scroll load', function(){

    var line = $(window).scrollTop(); 
    
    // exsicute this code only on main page 
    if ( $('body').is('#aktuelles') ) {
        $('nav').addClass('fix-nav');
    }else {
        if ( line >= 300 ) {
            $('nav').addClass('fix-nav');
        }else { $('nav').removeClass('fix-nav'); }
    }    
});
