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


$(document).ready(function() {
    $('.menu-dugme').click(function() {
        $('.mob-menu').slideToggle();
    });
});

var mouse_is_inside = false;

$(document).ready(function() {
    $('.menu-dugme').hover(function(){ mouse_is_inside=true; },
        function(){ mouse_is_inside=false; });
    $("body").mouseup(function(){ if(! mouse_is_inside)
        $('.mob-menu').hide();
    });
});