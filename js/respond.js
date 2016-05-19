
$(function() {
    $(window).resize(function() {
        jQuery.fn.exists = function () {
            return this.length > 0;
        }
        var tipka = ('<div class="tipka i-b"><img class="tipka-img" src="img/tipka-on.png" width: 59px height: 54px/></div>');
        var mobheading = ('<header class="helo-header-mob"><h1 class="marg-up helo">Hello,</h1><h5 class="pod-naslov">a bit about me:</h5></header>');
        var krugovi = ('<div id="krugovi-mob" class="marg-up"><a href="resume.html"><div class="my-resume circle"><p class="p-white">My resume</p></div></a><a href="projects.html"><div class="my-work circle"><p>My Work</p></div></a><a href="skills.html"><div class="my-skills circle"><p>My Skills</p></div></a></div>');
        
        if (window.innerWidth <= 768) {
            if (!$('.tipka').exists()) {
                $('.logo-sec').append(tipka);
                $('.main-sec').prepend(krugovi);
                $('.main-sec').prepend(mobheading);

            }
        }
        else if (window.innerWidth > 768) {
            $('.tipka').remove();
            $('.helo-header-mob').remove();
            $('#krugovi-mob').remove();
        }

        }).resize();
    });

$(function() {
    $(window).resize(function() {
        jQuery.fn.exists = function () {
            return this.length > 0;
        }
        var logoXs = ('<div id="logo-xs"><img src="img/logo-xs.png"></div>');
        var logo = ('<img class="i-b" id="logo" src="img/logo-s.png" alt="Logo">');

        if (window.innerWidth <= 480) {
            if (!$('#logo-xs').exists()) {
                $('.logo-sec').append(logoXs);
                $('#logo').hide();
            }
        }
        else if (window.innerWidth > 480) {
            $('#logo-xs').remove();
            $('#logo').show();
        }

        }).resize();
    });

var mouse_is_inside = false;

$(document).ready(function() {
    $('.tipka').hover(function(){ mouse_is_inside=true; },
        function(){ mouse_is_inside=false; });
    $("body").mouseup(function(){ if(! mouse_is_inside)
        $('.mob-menu').hide();
        if (!$('.mob-menu').exists()) {
            $('.tipka-img').show();
        }else {
            $('.tipka-img').hide();
        }
    });
});

$(document).ready(function(){
    $('.my-resume').mouseenter(function() {
      $(this).addClass('my-resume-h');
      $('.my-resume p').css('color', 'white');
     });
 
    $('.my-resume').mouseleave(function() {
        $(this).removeClass('my-resume-h');
        $('.my-resume p').css('color', '#ffa800');
        }); 

    $('.my-work').mouseenter(function() {
      $(this).addClass('my-work-h');
      $('.my-work p').css('color', 'white');
     });

    $('.my-work').mouseleave(function() {
        $(this).removeClass('my-work-h');
        $('.my-work p').css('color', '#dc3131');
        });

     $('.my-skills').mouseenter(function() {
      $(this).addClass('my-skills-h');
      $('.my-skills p').css('color', 'white');
     });

    $('.my-skills').mouseleave(function() {
        $(this).removeClass('my-skills-h');
        $('.my-skills p').css('color', '#33447c');
        });
});

$(document).ready(function() {
    $('.tipka').click(function() {
        $('.tipka-img').fadeToggle('fast');
        $('.mob-menu').slideToggle();
    });
    $('.mob-menu li').mouseenter(function() {
       $(this).css('background-color', '#57B3D3');   
    });
    $('.mob-menu a').mouseenter(function() {
       $(this).css('color', 'white');   
    });
    $('.mob-menu li').mouseleave(function() {
       $(this).css('background-color', '#5d5d5c');
       $('.mob-menu a').css('color', 'white');
    });
});


$(document).ready(function() {
    $('.pro-slika').hover(function() {      
        var $hoveredEl = $(this);
        $hoveredEl.find('.crna-tran').fadeToggle();
        $hoveredEl.find('.websitename').slideToggle();
        $hoveredEl.find('.lupo').fadeToggle(); 
    });
});

//$(document).ready(function () {
    // Handler for .ready() called.
//    window.setTimeout(function () {
//        location.href = "";
 //   }, 5000);
//});