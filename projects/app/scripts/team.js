

$('.team-box').on('click', function(e){
    
    var info = $(this).find('.person-info');
    var allInfo = $('.person-info');
    
    allInfo.hide();
    info.fadeIn(300);
  
    // donwload cv
    $('.download-cv').on('click', function(e){
        e.preventDefault();

        var number = $(this).attr('data-number');
        var url = 'downloads/cv' + number + '.doc';
        $('#my_iframe').attr('src', url);

    });
    // hide all info divs by click on section(background)
    $('section').on('click', function(e){
        if ( e.target == this ) { 
            if (allInfo.is(':visible')) {
                e.stopPropagation();
                allInfo.hide();
            }
            
        }
    });
    
    
});