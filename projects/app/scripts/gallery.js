
function xhr(callback) {
    $.getJSON('gallery/gallery.json', function(data){
            callback(data);
    });
}    
    

// load images in gallery section
function loadImages(data) {
    
    // select gallery container
    var gallery = $('.img-gallery');
    
    // create image li items with json info and append it to gallery
    $.each(data, function(name, obj) {
        
        // create li item
        var li = '<li>' + 
                    '<img src="' +obj.smallImg+ '" id="' +obj.id+ '" alt="Image"/>' +
                    '<div><i class="fa fa-plus-circle" aria-hidden="true"></i></div>' +
                 '</li>';
        gallery.append(li);    
    });
}
    
xhr(loadImages);


// gallery functions
function gallery(data) {

    var galleryContainer = $('#show-image');
    
    // show image on click
    $(document).on('click', '.img-gallery li', function(){
        
        var imgContainer = $('#big-image');
        var id = parseInt( $(this).find('img').attr('id') );
        
        $.each(data, function(name, obj){  
            if ( obj.id === id ) {
                $('#big-image').attr('src', obj.largeImg);
                $('#image-info').html(obj.text);
                $('#image-number').html(obj.id + '/6');
            }
        });
      
        $('#show-image').fadeIn(300);
    });
    
    // hide gallery with click on dark background
    galleryContainer.on('click', function(e) {
        if (e.target === this ) {
            $(this).fadeOut(300);
        }
    });
    // hide gallery with click on x icon
    $('#close-image').on('click', function(){ galleryContainer.fadeOut(300)});
    
    // change image on right
    $('#right').on('click', function(){
        // save number of image
        var id = parseInt($(this).closest('#image-container')
                                 .find('#image-number')
                                 .html().slice(0,1));
        var counter = id;
        if ( counter == 6 ) counter = 0;
        counter++;
        
        changeImage(counter) 
    });
    
    // change image on right
    $('#left').on('click', function(){
        // save number of image
        var id = parseInt($(this).closest('#image-container')
                          .find('#image-number')
                          .html().slice(0,1));
        var counter = id;
        if ( counter == 1 ) counter = 7;
        counter--;

        changeImage(counter) 
    });
    
    function changeImage(counter) {
        $.each(data, function(name, obj){  
            if ( obj.id === counter ) {
                $('#big-image').attr('src', obj.largeImg);
                $('#image-info').html(obj.text);
                $('#image-number').html(obj.id + '/6');
            }
        }); 
    }
}
xhr(gallery);