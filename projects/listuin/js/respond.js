(function($){

     
// ********************************************* on load ******************************   
    
//ANIMATE HEADER 
function animate(time) {

    var heroBox = $('.hero-text-box');
    heroBox.animate({
        'top' : '50%',
        'opacity' : 1
    }, time);
}
animate(1000);  
    
// SWITCH TESTIMONIALS IN SUBMENU UNDER THE HEADER
function showTestimonials() {
    
    // dom contaniner for testimonial and random number from 1-3
    var $container = $('.coment-box');
    var $randomNumber = Math.floor( (Math.random() *3) +1);

    if ( $randomNumber === 1 ) xhr('GET','data/testimonial1.html', addDataTo($container));
    else if( $randomNumber === 2 ) xhr('GET','data/testimonial2.html', addDataTo($container));
    else xhr('GET','data/testimonial3.html', addDataTo($container));
       
}showTestimonials();

   
// LOAD MOST POPULAR MENU
// xhr( ajax type, ajax url, callback( dom-el ), errorFunction)      
xhr('GET','data/most-popular.html', addDataTo('.most-used-menu'));

// LOAD SIDE MENU
// xhr( ajax type, ajax url, callback( dom-el ), errorFunction)
if ( $('body').is('#main-page') ) 
    xhr('GET','data/side-menu.html', addDataTo('#side-menu-links') );
    else xhr('GET','data/side-menu-mylinks.html', addDataTo('#side-menu-links'));

// LOAD FOOTER
// xhr( ajax type, ajax url, callback( dom-el ), errorFunction)
xhr('GET', 'data/footer-feature.html', addDataTo('#foot-featured'));


    
    
    
// **************************************** meke my profile *****************************      
    
// SHOW POPUP - CREATE MY LIST - index page
$('#create-list').on('click', function(){
    //xhr( ajax type, ajax url, callback( container, ajaxElement, fadeInSpeed ), errorFunction)
    xhr("GET", "data/create-my-list.html", addDataTo("#popups", '#show-create-popup', 300)); 
});    

// SHOW POPUP - CREATE MY LIST - other pages
(function(){    
    var sideButton = $('.create-list-side-popup');
    // remove side button for create the list if my list exsist
    if ( localStorage.exsist ) sideButton.remove();
    //create my list on side button
    sideButton.on('click', function(){
        xhr('GET', "data/create-my-list.html", addDataTo("#popups", '#show-create-popup', 300)); 
    });     
})();    
    
// CHANGE PROFILE PHOTO
(function() {
    
    var counter = 1;
    
    $('#popups').on('click contextmenu', '#create-img', function(e){
        
        if ( e.type === 'click' ) {
            counter++;
            if ( counter === 12 ) counter = 1;
            $(this).attr('src', 'img/my-list/' + counter + '.png');
        }
        
        if ( e.type === 'contextmenu' ) {
            e.preventDefault(); 
            if ( counter === 1 ) counter = 12;
            counter--;
            $(this).attr('src', 'img/my-list/' + counter + '.png');
        }
    });
})();             

// input lenght - 0/25
$('#popups').on('keyup', '#title-cr-list', function() { $("#length").html( $(this).val().length ) });    
    
// MAKE MY LIST ON CLICK   
$('#popups').on('click', '#save-create-list', function(e){
    e.preventDefault();  
    makeMyList();
    buttonsControl();
});  
    
// MAKE MY LIST ON ENTER
$('#popups').on('keyup', '#title-cr-list', function(e){
    e.preventDefault();  
    if ( $("#show-create-popup") ) {
        if ( e.which === 13 ) makeMyList();
    }   
    buttonsControl();
});     
    
// MAKE A LIST AND SAVE IT IN LOCAL STORAGE    
function makeMyList() {
    // if input is empty show error message - Please enter a title
    var $inputLength = $("#title-cr-list").val().length;
    
    if ( $inputLength  === 0 ) $('#list-create-error').html('Please enter a title');
    else {
        // take title and img src
        var $img = $('#create-img').attr('src');
        var $title = $('#title-cr-list').val();
        
        // localStorage setup
        // saveLocalStorage( name, element ); 
        saveLocalStorage('exsist', true);
        saveLocalStorage('myProfileImage', $img);
        saveLocalStorage('myProfileTitle', $title);
        saveLocalStorage('myListItems', "");
        saveLocalStorage('linksLits', "");
        
        $('#title-cr-list').val('');  // empty the input
        $('#show-create-popup').fadeOut(300);
        loadProfileInfo()
    }
}

// LOAD PROFILE INFO BASE ON LOCAL STORAGE - index.html
function loadProfileInfo() {
    
    if ( localStorage.exsist ) {
        
        $('#create-list').hide(); // hide the red cover
        $('#profile-photo').attr('src', localStorage.myProfileImage);
        $('#title-of-list').html(localStorage.myProfileTitle);
    }else {
        resetProfileInfo();
    }
    
}   
loadProfileInfo();

// SET PROFILE IMAGE AND TITLE ON DEFAULT  - reusable 
function resetProfileInfo() {
    $('#profile-photo').attr('src', 'img/my-list/1.png');
    $('#title-of-list').html('My list');
    $('#create-list').show();
}    

// REMOVE MY LIST
$('#remove-my-list').on('click', function(){
    
    $('#popups').empty(); // empty the popup container div
    xhr('GET', 'data/remove-my-list.html', addDataTo('#popups', '.close-create-popup', 300));   

    // remove the list and reset profile to default
    $('#popups').on('click', '#yes-remove-list', function(e) {
        e.preventDefault();
        localStorage.clear(); // remove all data from local storage
        $('#create-list').hide(); // show red cover
        resetProfileInfo(); 
        $('.close-create-popup').fadeOut(300);
    });
});    

// HIDE CREATE SIDE BUTTON AND SHOW MY LIST BUTTON  -reusable    
function buttonsControl() {
    if ( localStorage.exsist ) {
        $('.create-list-side-popup').remove();  // remove create a list side button 
        $('#my-list-link').show(); // show my list button
    }
}    

// ************************************ pin ****************************************    

// TAKE URL AND TITLE AND STOR IT MY LIST - localStorage    
$('.pin').on('click', function(){
    
    // store the url link and title
    var $this = $(this);
    var $link = $this.next().next().attr('href');
    var $title = $this.closest('li').find('h4').html();
    var $listSize = checkListSize();
    var $continue = true; 

    // if there is no list, show error msg
    if ( !localStorage.exsist ) {
        pinErrorMsg('Make a list first', $this);
        $continue = false;
    }
    // check my list size, if its full show error msg
    else if ( $listSize == 'full' ) {
        pinErrorMsg('Your list is full!', $this);
        $continue = false;
    }
    // if linksList localStorage has at leaset one link
    // check if its the same link and show msg error if it is
    else if ( localStorage.linksLits ) {
        var $listOfLinks = localStorage.linksLits;
        var $array = $listOfLinks.split(',');
        $.each( $array, function(index, el){
            if ( el == $link ) {
                $continue = false;
                pinErrorMsg('This link is in your list!', $this);
            }
        });      
    }
    // add new <li> item in local sotrage             
    if ( $continue == true ){
        checkListSize(); // check the list size
        localStorage.myListItems += createListItem( $title, $link  ); // put all items in same local storage
        localStorage.linksLits += $link +","; // store link and linksList array in localStorage
        xhr('GET', 'data/pin-popup.html', addDataToUp('#popups', '#pin-this-tem', 500, '#pin-msg',  $title + ' is added to your list!'));  // show animation with title
    }
});    
    
// CREATE AND SHOW ERROR MSG NEXT TO THE PIN ICON    
function pinErrorMsg(msg, thisPin) {

    var $msg = thisPin.closest('li').find('.arrow-popup');
    $msg.html(msg);
    $msg.fadeIn(300).delay(500).fadeOut(300);
}   

    
    
// ************************************ my list *************************************  

    
// MY LIST SETUP    
(function(){
    $('#link-list').append( localStorage.myListItems );  // append <li> items from local storage in my list
    if ( $('#link-list li').length === 0 ) $('#empty-list-msg').show(); // if list is empty show msg link
    if ( localStorage.exsist ) $('#my-list-link').show();  // if LS exsis show my list button on all the pages
})();

// SHOW AND HIDE REMOVE LIST ICONS 
$('#remove-all-links a').on('click', function(e){
    e.preventDefault();
    $('.small-btn').toggle();
});    

// REMOVE ALL ELEMENTS FROM THE LIST    
$('#yes').on('click', function(){
    // remove localstorage link array and list items
    localStorage.setItem('myListItems', '');
    localStorage.setItem('linksLits', '');
    // remove <li> items from my list and hide remove buttons
    $('#link-list').empty();
    $('.small-btn').hide();
    if ( $('#link-list li').length === 0 ) $('#empty-list-msg').show();
    setListLength();
    checkListSize();
});    
    
// HIDE REMOVE ALL LIST ITEMS BUTTONS     
$("#no").on('click', function(){ $('.small-btn').hide(); });    

// COUNT THE ITEMS IN MY LIST
function setListLength() {
    var $length = $("#link-list li").length;
    $(".list-counter").html($length + ' Items');
}
setListLength();
    
// CAHNGE THE TITLE
$(document).on('click', '.a-chage-text', function(){
    // take input value nad bc color of 
    var $input = $(this).next();
    var $bcColor = $(this).next().next().css('background-color');
    // set input bc color to link bc color, show it and set focus
    $input.css('background-color', $bcColor);
    $input.show();
    $input.focus();
    // save on enter
    $input.on('keyup', function(e){
        if ( e.which == 13 ) {
            var $text = $input.val();
            var $title = $input.closest('li').find('.l-title');
            
            $title.html($text);
            $input.hide();
            saveList();
        }
    });
    // remove the input on blur
    $input.on('blur', function(){
        $input.val("");
        $input.hide();
    });
});    
    
// CHANGE BC COLOR OF THE LINK
$(document).on('click','.change-color', function(){
        // add color palat in li item
        var $colorPalat = createColorPalat();
        var $li = $(this).closest('li');
        $li.append($colorPalat);
    // change color on click
    $(document).on('click', '.color-palat li div', function(){
            
            var $bcColor = $(this).prop('class');  // chose bc color on click
            var $liColor = $(this).closest('.my-list-item').find('p');  // background color of the li

            $liColor.removeClass(); // remove color
            $liColor.addClass($bcColor); // add color
            $('.color-palat').remove();  
            saveList(); // save new list
       });
});    
    
// REMOVE ONE LIST ITEM
$(document).on('click', '.remove-list-i', function(){

    var $url = $(this).closest('li').find('a').attr('href');
    $(this).closest('li').attr('data-info', 'remove');
    xhr('GET', 'data/remove-this-link.html', addDataTo('#popups', '.close-create-popup', 300)); 
    
    $('#popups').on('click', '#remove-li', function(e){
        e.preventDefault();
        $('li[data-info="remove"').remove();
        $('#popups').empty();
        saveList();
        setListLength(); 
        checkListSize();
        
        var $links = localStorage.linksLits.split(',');
        var $newArray = $links.filter(function(link){
            return link !== $url;
        });
        var $newLinks = $newArray.join();
        localStorage.setItem('linksLits', $newLinks);
        if ( $('#link-list li').length === 0 ) $('#empty-list-msg').show();
    });
});


// ADD EXTERNAL LINK
$('#addExternal').on('click', function(e){
    e.preventDefault();
    
    xhr("GET", "data/add-external.html", addDataTo("#popups", '.add-external-popup', 300)); 
});    
    
// SAVE NEW LINK IN LIST ON YES BUTTON    
$('#popups').on('click', '#add-external-url', function(e){
    e.preventDefault();
    // check if the inputs are empty and add new link
    checkAndAddNewLink();
    setListLength();
    checkListSize(); 
});
// SAVE NEW LINK IN LIST ON ENTER
    $('#popups').on('keyup', '#remove-list-question', function(e){
    e.preventDefault();
        if ( $('body').is('#my-list') ) {    
            if ( e.which === 13 ) {
                // check if the inputs are empty and add new link
                checkAndAddNewLink();
                setListLength();
                checkListSize(); 
            }
    }
});
    
function checkAndAddNewLink() {

    var $title = $('#external-title').val();
    var $url = $('#external-url').val();
    var $titleError = $('#error-external-title');
    var $urlError = $('#error-external-url');
    
    if ( $title.length === 0 ) { $titleError.html('Please enter a title'); return 'inputEmpty'}
    else { $titleError.html('&nbsp;'); }
    
    if ($url.length === 0 )  {$urlError.html('Please enter a url'); return 'inputEmpty'}    
    else { $urlError.html('&nbsp;'); }
    
    // save <li> item and append it to list
    var $el = createListItem($title, $url); // create <li> with url and title
    localStorage.myListItems += $el;  // add new li elemnt to the local storage
    localStorage.linksLits += $url + ",";  // add new link to links array
    $('.add-external-popup').hide();  // hide popup
    $('#link-list').append( $el ); // appens <li> to the list
    if ( $('#link-list li').length > 0 ) $('#empty-list-msg').hide();  // if there are links in list, gide the empty list msg
}
    
// MAKE LIST ITEMS SORTABLE AND SAVE ON SORT    
if ($('body').is('#my-list')) { $('#link-list').sortable({ axis: 'y' }); }    
$('#link-list').on('mouseup', 'li', function(){
    setTimeout(function(){
        saveList();
    },100);
});     

    
        
/*
// SHADOW ON SOTRING THE LINKS
$(document).on('mousedown mouseup', '.my-list-item p', function(e){
    var $this = $(this);
    if ( e.type == 'mousedown' ) { 
        //$(this).addClass('active-shadow')
        setTimeout(function() { $($this).addClass('active-shadow');  },50);
    }
    if ( e.type == 'mouseup' ) {
        $(this).removeClass('active-shadow'); 
    }
});   
*/  
    
// ************************************ local sotarge *****************************   
    
// CALCULATE THE SIZE OF THE LOCAL STORAGE MY LIST
// AND IF THE TORAGE IS FULL TERURN THE STRING 'FULL'    
function checkListSize() {
    // check for the size of local storage
    for (var x in localStorage ) {
        if ( x == 'myListItems' ) {
            var $myListSize = (((localStorage[x].length * 2)/1024/1024).toFixed(2));
            $('#list-num-of-items').html($myListSize);
        }
    }
    // check for the size, if its full return 'full'
    if ( $myListSize >= 1.25 ) { 
        $('#addExternal').hide();    
        return 'full'; 
    }
}
checkListSize();    
    
    
// SAVE MY LIST IN LOCAL STORAGE
function saveList() {
    var $links = $('#link-list').html();
    localStorage.setItem('myListItems', $links);
}
    
    
// ************************************ create list item *******************************     
    
 // CREATE LIST ITEM   
function createListItem( title, url ) {
    
    var $el = '<li class="my-list-item">' + 
                      '<i class="fa fa-times-circle list-itme-icons remove-list-i"></i>' + 
                      '<i class="fa fa-paint-brush list-itme-icons change-color"></i>' + 
                      '<i class="fa fa-font list-itme-icons a-chage-text"></i>' + 
                      '<input type="text" maxlength="25" class="change-title-ln">' + 
                      '<a href="' + url + '" class="bc-bolor" target="_blank">' + 
                         '<p class="color1">' + 
                            '<i class="fa fa-share-square-o"></i>' + 
                            '<span class="l-title">' + title + '</span>' + 
                         '</p>' + 
                      '</a>' + 
                   '</li>';
    return $el; 
}    

// CREATE COLOR PALAT    
function createColorPalat() {

 var $el = '<div class="color-palat">' +
                '<i class="fa fa-times-circle list-itme-icons close-color-palat"></i>' +
                '<i class="fa fa-tint" aria-hidden="true"></i>' +
                '<ul>' +
                   '<li><div class="color2"></div></li>' +
                   '<li><div class="color3"></div></li>' +
                   '<li><div class="color4"></div></li>' +
                   '<li class="h-exx-s"><div class="color5"></div></li>' +
                   '<li class="h-exx-s"><div class="color6"></div></li>' +
                   '<li class="h-exx-s"><div class="color7"></div></li>' +
                   '<li class="h-on-s"><div class="color8"></div></li>' +
                   '<li class="h-on-s"><div class="color9"></div></li>' +
                '</ul>' +
             '</div>';
    return $el;   
}    
    
// ************************************ hide popups ********************************* 
    
    
// HIDE POPUPS - HIDE ON X
$('#popups').on('click', '#close', function(){

    $(this).closest('.hide-popup').fadeOut(300, function(){ $(this).remove(); });
});
    
// HIDE POPUPS - HIDE ON CANCLE
$('#popups').on('click', '.cancle', function(e){
    e.preventDefault();
    $(this).closest('.hide-popup').fadeOut(300, function(){ $(this).remove(); });
});    

// HIDE POPUPS - HIDE ON BACKGROUND CLICK
$('#popups').on('click', '.bg-trans', function(e){

    if ( e.target === this ) $(this).fadeOut(300);
});

    
    
// ******************************************** on scroll *****************************     

    
    
// SHOW AND HIDE SHARE ON SCROLL    
(function() {

    var $headerTop = $('.sub-header').offset().top;  // distance between subheader and top of the window
    var $share = $('#side-menu-share');

    // show and hide shere isons on scroll and resize
    $(window).on('scroll resize', function(){

        var $topPage = $(window).scrollTop();  // distance between the top of the window and top of the document
        var $windowWidth = $(window).width();  // width of the screen

        // show and hide side share icons
        if ( $windowWidth <= 1100 ) $share.hide(); 
        else {
            if ( $topPage >= $headerTop ) $share.fadeIn(300);
            else $share.hide();
        }   
    });    
})();

       
    
    
// ********************************************* ajax ********************************* 
    
// use ajax by calling xhr function    
// xhr( ajax type, ajax url, callback( dom-el ), error      
    
function xhr( type, url, callback, error ) {

    $.ajax({
        type: type,
        url: url,
        success: function(data) { callback(data); },
        error: error
    });
}    

// select the elements and put in it data from ajax call        
function addDataTo(container, el, time) {

    container = $( container );
    function add( data ) {
        container.html(data);
        $(el).fadeIn(time);
    }
    return add;
}   

//       
function addDataToUp(container, el, time, elHtml, title) {

    container = $( container );
    function add( data ) {
        container.html(data);
        $(elHtml).html(title);
        $(el).slideDown(time, function(){ $(this).fadeOut(300) });
    }
    return add;
} 

    
// ******************************************  save local storage ************************* 
    
function saveLocalStorage(name, el) {
    localStorage.setItem(name, el);
}     
    
    
    
})(jQuery);