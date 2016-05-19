$(document).ready(function(){
    
    /* --- STICKE NAVIGATION --- */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '70px;'
    });
    
    
    
    
    /* --- SCROLL ON BUTTONS --- */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    });
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });
    
    
    
    /* --- NAVIGATION SCROLL SMOOTH --- */
        $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /* --- ANIMATIONS ON SCROOL --- */
    $('.js--wp-1').waypoint(function(direction) { 
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
     offset: '60%'   
    });
    
    $('.js--wp-2').waypoint(function(direction) { 
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
     offset: '60%'   
    });
    
    $('.js--wp-3').waypoint(function(direction) { 
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
     offset: '60%'   
    });
    
    $('.js--wp-4').waypoint(function(direction) { 
        $('.js--wp-4').addClass('animated pulse');
    }, {
     offset: '60%'   
    });
    
    
    /* --- MOBILE NAVIGATION --- */
    $('.js--nav-icon').click(function() {
        var mobnav = $('.js--main-nav');
        mobnav.animate({width:'toggle'},200);
    });
    
    
    var mouse_is_inside = false;

    $(document).ready(function() {
        $('.js--nav-icon').hover(function(){ mouse_is_inside=true; },
            function(){ mouse_is_inside=false; });
        $("body").mouseup(function(){ if(! mouse_is_inside)
            $('.main-nav-mob').hide();
        });
    });
    
    
    /* --- MAP --- */
    var map = new GMaps({
        div: '.map',
        lat: 38.7436266,
        lng: -9.04,
        zoom: 12
    });
    
    map.addMarker({
        lat: 38.7436266,
        lng: -9.1602037,
        title: 'Lisbon',
        infoWindow: {
            content: '<p>Omnifood HQ</p>'
        }
    });
});