
// show and hide manu on small devices
(function(){
 
    // show and hide menu on button click
    $('#btn-mobile-menu').on('click', function(){ $('.main-nav').fadeToggle(300); });

    var mouseOnButton = false;

    $('#btn-mobile-menu').on('mouseover', function(){ mouseOnButton = true; });
    $('#btn-mobile-menu').on('mouseout', function(){ mouseOnButton = false; });

    var windowWidth = $(window).width();
    
    if ( windowWidth < 768 ) {
    
        // hide menu by cilcking on the document if mouse in not on menu button    
        $(document).on('click', function(){
            if ( mouseOnButton == false ) $('.main-nav').css('display', 'none');
        });
    
        //hide menu on clicking on menu link
        $('.main-nav a').on('click', function(){ $(this).closest('ul').css('display', 'none'); });
    }  
})();

// show menu after hiding it withclick on the document
$(window).on('resize', function(){ 
    var windowW = $(window).width(); 
    if ( windowW > 768 ) { $('.main-nav').show(); }
    if ( windowW < 768 ) { $('.main-nav').hide(); }
});