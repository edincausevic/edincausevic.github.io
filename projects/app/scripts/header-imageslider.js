$(function(){

// start slideshow - headerImgAnimation( change image every ); 
headerImgAnimation(5000);     
    
function headerImgAnimation(time){

    var header = $('header');
    var bltPoints = $('#bltPoints li');
    var counter = 1
    var pause = false;
    
    //change image on time
    var interval = setInterval(function(){

        if ( pause === false ) {
            
            // reset counter
            if ( counter === 3 ) counter = 0;
            //change header image with counter
            counter++;
            header.attr('class', 'background' + counter);
            // change bullet points with counter
            bltPoints.removeClass();
            $('#bp' + counter).attr('class', 'bpActive');
        }    
    },time); 
    
    //change image on click
    bltPoints.on('click', function(){
        
        // change buttons icons
        bltPoints.removeClass();
        $(this).addClass('bpActive');
        //change image
        var thisId = $(this).attr('id');
        counter = parseInt(thisId.slice(-1));
        header.attr('class', 'background' + counter);
    });
    
    // puse and resume the slideshow
    bltPoints.on('mouseover mouseout', function(e) {
        
        // pause the slideshow
        if ( e.type === 'mouseover' ) {
            pause = true;
        }
        // resume the slideshow
        if ( e.type === 'mouseout' ) {
            pause = false;
        }
    });
};
    

// header background image preloader
function imagePreloader() {

    for ( var i = 0; i < arguments.length; i++ ) {

        $('<img/>').attr('src', arguments[i]);
    }
}    
    
imagePreloader('css/img/header-bc2.jpg', 'css/img/header-bc3.jpg');    
    
});