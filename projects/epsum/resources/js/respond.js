
$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});



$(document).ready(function(){
   
    $('.js--html-btn').click(function() {
        $('.js--text').hide();
        $('.js--html').show();
        $('.js--css').hide();
        $('.btn1').removeClass('btn-active');
        $('.btn3').removeClass('btn-active');
        $('.btn2').addClass('btn-active');
    });
    
    $('.js--css-btn').click(function() {
        $('.js--text').hide();
        $('.js--html').hide();
        $('.js--css').show();
        $('.btn1').removeClass('btn-active');
        $('.btn2').removeClass('btn-active');
        $('.btn3').addClass('btn-active');
    });
    
    $('.js--text-btn').click(function() {
        $('.js--text').show();
        $('.js--html').hide();
        $('.js--css').hide();
        $('.btn2').removeClass('btn-active');
        $('.btn3').removeClass('btn-active');
        $('.btn1').addClass('btn-active');
    });
    
    
    
    /* dojnji meni sadrzaj classical*/
    
    $(document).ready(function() {
        $('.menu-bottom li').click(function() {      
           $('.menu-bottom li').removeClass('active-mb');
           $(this).addClass('active-mb');
            $('.js--text').show();
            $('.js--html').hide();
            $('.js--css').hide();
            $('.btn2').removeClass('btn-active');
            $('.btn3').removeClass('btn-active');
            $('.btn1').addClass('btn-active');
        });
    });
    
    
    function show(className) {
        $('.classical-a,.classical-b,.classical-c,.classical-d,.classical-e,.classical-f,.classical-g,.classical-h,.classical-i').hide();
        $(className).show();
        }

        $('.classical-a-btn').click(function() {
            show('.classical-a');
        });
         $('.classical-b-btn').click(function() {
            show('.classical-b');
        });
         $('.classical-c-btn').click(function() {
            show('.classical-c');
        });
         $('.classical-d-btn').click(function() {
            show('.classical-d');
        });
        $('.classical-e-btn').click(function() {
            show('.classical-e');
        });
        $('.classical-f-btn').click(function() {
            show('.classical-f');
        });
        $('.classical-g-btn').click(function() {
            show('.classical-g');
        });
        $('.classical-h-btn').click(function() {
            show('.classical-h');
        });
        $('.classical-i-btn').click(function() {
            show('.classical-i');
        });
    
       
    /* Inforamtion IMAGE*/
    
    $('.js--information').click(function() {
        $('.js--info-img').toggle();
    });
    
    var mouse_is_inside = false;

    $(document).ready(function() {
        $('.js--information').hover(function(){ mouse_is_inside=true; },
            function(){ mouse_is_inside=false; });
        $("body").mouseup(function(){ if(! mouse_is_inside)
            $('.js--info-img').hide();
        });
    });
    
    
     /* HR CSS*/
    
    $(document).ready(function() {
        $('.hr-css--js1').click(function() {      
            $('.hr-code-back--js1').slideToggle();
        });
        $('.hr-css--js2').click(function() {      
            $('.hr-code-back--js2').slideToggle();
        });
        $('.hr-css--js3').click(function() {      
            $('.hr-code-back--js3').slideToggle();
        });
        $('.hr-css--js4').click(function() {      
            $('.hr-code-back--js4').slideToggle();
        });
        $('.hr-css--js5').click(function() {      
            $('.hr-code-back--js5').slideToggle();
        });
        $('.hr-css--js6').click(function() {      
            $('.hr-code-back--js6').slideToggle();
        });
        $('.hr-css--js7').click(function() {      
            $('.hr-code-back--js7').slideToggle();
        });
        $('.hr-css--js11').click(function() {      
            $('.hr-code-back--js11').slideToggle();
        });
        $('.hr-css--js13').click(function() {      
            $('.hr-code-back--js13').slideToggle();
        });
        $('.hr-css--js14').click(function() {      
            $('.hr-code-back--js14').slideToggle();
        });
        $('.hr-css--js15').click(function() {      
            $('.hr-code-back--js15').slideToggle();
        });
        $('.hr-css--js16').click(function() {      
            $('.hr-code-back--js16').slideToggle();
        });
        $('.hr-css--js17').click(function() {      
            $('.hr-code-back--js17').slideToggle();
        });
    });

    /* ubaci ovdje sta zelis da se prikaze u reklamu u gornjem lijevom cosku */
    
   /*
    
    var reklama = $('<a href="#" target="_blank"><div class="js--reklama-moja"><h3>Making a website? Need cool and meaningful phrases?</h3><p>Check our website and get it for free. <i class="ion-arrow-right-c"></i></p></div></a>');
    $('.reklama').append(reklama);
     
    $(".reklama").hover(function(){
    $(this).css("background-color", "#f4f4f4");
    }, function(){
    $(this).css("background-color", "inherit");
    });
    
    */
});