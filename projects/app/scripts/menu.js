
// show and hide menu on button click
$('#btn-mobile-menu').on('click', function(){

    $('.main-nav').fadeToggle(300, function(){
        if ( $('.main-nav').is(':hidden') ) 
        $(this).css('display', '');
    });
});

// hide menu on link click
$('.main-nav a').on('click', function(){

    var menu = $(this).closest('ul');
    menu.fadeOut(300, function(){
        $('.main-nav').css('display', '');
    });
});

