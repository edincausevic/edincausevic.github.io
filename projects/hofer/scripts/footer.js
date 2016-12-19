$('.futter-btn').on('click', function(){

    $('.footer-info').slideToggle();
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    $(this).hide();
});