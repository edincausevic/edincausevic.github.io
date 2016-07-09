(function($){

    
//CHOOSE RANDOM NUMBER 
var $randomNumber = Math.random();  
  
//COMMENTS SECTION

var $commentBox = $('.coment-box');
    
if ( $('.header-title').is(':visible') ) {
    var comment1 = '<img src="img/testimonial1.jpg" /><blockquote><p class="testimonial">“ Before I discoverd this website I literely had fifthine tabs reserved for web designecontant, now I have one. Thank you :) “</p></blockquote>';
    var comment2 = '<img src="img/testimonial2.jpg" /><blockquote><p class="testimonial">“ Thank you so much for this website! The content quality is incredible and almost everything is very useful to me. “</p></blockquote>';
    var comment3 = '<img src="img/testimonial3.jpg" /><blockquote><p class="testimonial">“ Great website, content is very useful and it helps me alot in my work. You guys have made my life easier. “</p></blockquote>';
}else {
    var comment1 = '<img src="../img/testimonial1.jpg" /><blockquote><p class="testimonial">“ Before I discoverd this website I literely had fifthine tabs reserved for web designecontant, now I have one. Thank you :) “</p></blockquote>';
    var comment2 = '<img src="../img/testimonial2.jpg" /><blockquote><p class="testimonial">“ Thank you so much for this website! The content quality is incredible and almost everything is very useful to me. “</p></blockquote>';
    var comment3 = '<img src="../img/testimonial3.jpg" /><blockquote><p class="testimonial">“ Great website, content is very useful and it helps me alot in my work. You guys have made my life easier. “</p></blockquote>';
}    

if ($randomNumber <= 0.30) {
    $commentBox.empty();
    $commentBox.append(comment1);
}else if ($randomNumber > 0.60) {
    $commentBox.empty();
    $commentBox.append(comment2);
}else {
    $commentBox.empty();
    $commentBox.append(comment3);
}


// SOCIAL NETWORK PAGE LOAD ANIMATION
/*
var count = 1;
var $icons = $('.social-networks .fa');

var interval = setInterval(function() { 
   if (count <= $icons.length + 1) { 
      console.log(count);
      
     switch (count) {
       case 1:
         $icons.first().css('color', '#3b5998');
         break;
       case 2:
         $icons.first().css('color', '');
         $icons.eq(1).css('color', '#55acee');
         break;
       case 3:
         $icons.eq(1).css('color', '');
         $icons.eq(2).css('color', '#dd4b39');
         break;
       case 4:
         $icons.eq(2).css('color', '');
         $icons.eq(3).css('color', '#007bb5');
         break;
       case 5:
         $icons.eq(3).css('color', '');
         $icons.eq(4).css('color', '#3b5998');
         break;
       case 6:
         $icons.eq(4).css('color', '');
         $icons.eq(5).css('color', '#55acee');
         break;
       case 7:
         $icons.eq(5).css('color', '');
         $icons.eq(6).css('color', '#dd4b39');
         break;    
       case 8:
         $icons.eq(6).css('color', '');       
       default: {
          console.log('SocialN animation done');
          break;   
       }         
     }
     count++;
   }
   else { 
      clearInterval(interval);
   }
}, 250);

*/


/********************************************** LOAD LOCAL SOTRAGET AND ALL THE CHANGES ***/

if(localStorage.redCover == 'hideRedCover'){ $('#create-list').hide(); }
if(localStorage.myPageLinks == 'show') { $('#my-list-link').show(); $('.create-list-side-popup').remove();}    
if($(window).width() <= 1002 && localStorage.myPageLinks == 'show') { $('.my-list-mob-link').show(); }    
$('#link-list').append(localStorage.myList);   
    
$('#title-of-list').html(localStorage.createListName);
//$('#profile-photo').attr('src', localStorage.profileImage);

//check for the my list image profile if it has ../ -> remove it
(function(){
    var imgUrl = localStorage.profileImage;
    if ( localStorage.myPageLinks == 'show' ) {
        var newLink = imgUrl.slice(3);
        var prefix = imgUrl.slice(0,3);
    }    
    if (prefix == '../') {
        $('#profile-photo').attr('src', newLink);
    }  
   
})();
   
//check for the list length. show and hise yellow emty list link    
function checkListLength() {
    if($('#link-list li').length === 0 ) { 
    $('#empty-list-msg').show();
    }else {
        $('#empty-list-msg').hide();
    }    
} 
checkListLength();    
/********************************************************************** CREATE MY LIST *****/ 


// CREATE LIST - zamjeni s ajaxom kad skontas
$('#create-list').on('click', function(){
    resetCreateMenu();
    if ( !XMLHttpRequest ) {
        // error message
        return;
    } 
    else {  
        $(this).fadeOut('300');
        xhrFunc('popups/create-my-list.html', '#popups')
        $('#show-create-popup').fadeIn('300');
    }    
});

// CREATE LIST SIDE LINK
$('.create-list-side-popup').on('click', function(){
    xhrFunc('../popups/create-my-list-side-link.html', '#popups');
    $('#show-create-popup').fadeIn('300');
});
    
// RESET CREATE MENU
function resetCreateMenu() {
    $titleInput.val('');
    $titleCreateTitle.html('My list');
    $('#length').html('0');
    $('#create-img').attr('src', 'img/my-list/1.png');
    $('#list-create-error').html('');
}

var $titleInput = $('#title-cr-list');    
var $titleCreateTitle = $('#title-of-create');
var $lenght = parseInt($('#length').html());

// WRITE DOWN THE LIST NAME
$titleInput.keyup(function(){
    
    var $input = $(this).val();
    var $inputLength = parseInt($input.length);
    var $result = $lenght + $inputLength;
    $('#length').html($result);
    
    
    if ($input.length < 14) {
    $titleCreateTitle.html($input);
    } else{
        $titleCreateTitle.text($titleCreateTitle.text().substr(0, 8)+ '...');
    }
    
    if ($input.length === 0) {
            $titleCreateTitle.html('My list');
        }
});

//CHOSE PHOTO
var $photoNumber = 1;

$(document).on('click', '#create-img', function(){   
    $photoNumber++;
    if ($photoNumber === 12) {
        $photoNumber = 1;
    }
    if ( $('body').is('#main-page') ) {
        $(this).attr('src', 'img/my-list/' + $photoNumber + '.png'); 
   }else {
        $(this).attr('src', '../img/my-list/' + $photoNumber + '.png'); 
   }
    
});
$(document).on('contextmenu', '#create-img', function(e) {
    e.preventDefault();
    if ($photoNumber == 1) {
        $photoNumber = 12;
    }
    $photoNumber--;
    if ( $('body').is('#main-page') ) {
        $(this).attr('src', 'img/my-list/' + $photoNumber + '.png'); 
   }else {
        $(this).attr('src', '../img/my-list/' + $photoNumber + '.png'); 
   }
});


// SAVE THE LIST BY CLICK
$(document).on('click', '#save-create-list', function(e){
    if ( localStorage.length !== 0 ) { localStorage.clear(); }
    var $title = $('#title-cr-list').val();
    if ($title === '') {
        $('#list-create-error').html('Please enter a title');
        e.preventDefault();
    }else{
        createMyProfile();
        e.preventDefault();
    }
}); 

//CHECK IF THE MAIN PAGE IS LOADEd AND SAVE THE LIST BY ENTER
//(SO THIS CODE WILL WORK ONLY ON INDEX PAGE)
if ($('body').is('#main-page')) {
    $(document).on('keypress', function(e){
        if ( $('#show-create-popup').is(':visible') ) {
            if (e.which == 13) {
                    var $title = $('#title-cr-list').val();
                    if ($title === '') {
                        $('#list-create-error').html('Please enter a title');
                        e.preventDefault();
                    }else{
                        createMyProfile();
                        e.preventDefault();
                    }
            }
        }    
    });
}

// CREATE THE PROFILE
function createMyProfile() {
    var $title = $('#title-cr-list').val();

    //hide and save red cover
    $('#create-list').hide();
    localStorage.redCover = 'hideRedCover';

    //give list name
    $('#title-of-list').html($title);
    localStorage.createListName = $title;

    //change list photo
    var $img = $('#create-img').attr('src');

    $('#profile-photo').attr('src', $img);
    localStorage.profileImage = $img;

    $('.hide-popup').fadeOut('300');

    //show links for my page on other pages
    $('#my-list-link').show();
    $('.create-list-side-popup').remove();
    localStorage.myPageLinks = 'show';
    
    // create local storage array
    localStorage.listArray = '';
    
}
    
// REMOVE MY LIST
$(document).on('click', '#remove-my-list', function(){
    xhr('popups/remove-my-list.html', '#popups');
    $('.close-create-popup').fadeIn('300');
});

$(document).on('click', '#yes-remove-list', function(e){
    closePopup();  
    localStorage.clear();
    $("#create-list").show();
    $('#title-of-list').html('My list');
    $('#profile-photo').attr('src', 'img/my-list/1.png');
    e.preventDefault();
});
  
// hide my list link if window size in below 1002px and 
// if there is no my list profile    
$(window).on('resize', function() {
    if (localStorage.myPageLinks == 'show') {
        var $link = $('.my-list-mob-link');
        var myListTextLink = $(window).width() <= 1002 ? $link.show() : $link.hide(); 
    }
});    
    
    
    
/*************************************************************** ADD AND REMOVE ITEMS ****/ 
    
    
    
    
// PIN ITEM
$('.pin').on('click', function(e){
    var $this = $(this);
    var $listEmpty = $(this).next();
    
    // store the title and href
    var $url = $(this).next().next().attr('href');
    var $title = $(this).closest('li').find('h4').html();
    
    
    //check the size of the list
    for(var x in localStorage) {
        if ( x === 'myList' ) {
            var $myListSize = (((localStorage[x].length * 2)/1024/1024).toFixed(2));
        }
    } 
    
    
    
    if(!localStorage.profileImage) {
        $listEmpty.html('Create a list first').fadeIn('200');

        setTimeout(function(){
            $listEmpty.fadeOut('200');
        }, 1000);
        e.stopPropagation();
    }else if($myListSize == 1.25) {
        $listEmpty.html('Your list is full!').fadeIn('200');

        setTimeout(function(){
            $listEmpty.fadeOut('200');
        }, 1000);

        e.stopPropagation();
        }else {
            // show the msg
            $('#pin-this-tem').find('#pin-msg').html($title + ' is added to your list!');
            // create the list
            var $listItem = '';

            // MSG
            $('#pin-this-tem').slideDown('slow').fadeOut('300');

            //clone
            var $link = '<li class="my-list-item"><i class="fa fa-times-circle list-itme-icons remove-list-i"></i><i class="fa fa-paint-brush list-itme-icons change-color"></i><i class="fa fa-font list-itme-icons a-chage-text"></i><input type="text" maxlength="25" class="change-title-ln"><a href="' +$url + '" class="bc-bolor" target="_blank"><p class="color1"><i class="fa fa-share-square-o"></i><span class="l-title">' +$title+ '</span></p></a></li>';

            //save in my list
            function appendToStorage(name, data){
                var old = localStorage.getItem(name);
                if(old === null) old = "";
                localStorage.setItem(name, old + data);
            }

            appendToStorage('myList', $link); 
        }
    
});

// PIN THE GROUP ITEM 
$('.pin-list').on('click', function(e){
     var $this = $(this);
     var $listEmpty = $(this).next();

     // store the title and href
     var $url = $(this).next().next().attr('href');
     var $title = $(this).closest('li').find('h4').html();
    
    //check the size of the list
    for(var x in localStorage) {
        if ( x === 'myList' ) {
            var $myListSize = (((localStorage[x].length * 2)/1024/1024).toFixed(2));
        }
    } 

    if(!localStorage.profileImage) {
        $listEmpty.html('Create a list first').fadeIn('200');

        setTimeout(function(){
            $listEmpty.fadeOut('200');
        }, 1000);
        e.stopPropagation();
    }else if($myListSize == 1.25) {
            $listEmpty.html('Your list is full!').fadeIn('200');

            setTimeout(function(){
                $listEmpty.fadeOut('200');
            }, 1000);
            e.stopPropagation();
        }else {
            
            // show the msg
            $('#pin-this-tem').find('#pin-msg').html($title + ' is added to your list!');
            // create the list
            var $listItem = '';

            // MSG
            $('#pin-this-tem').slideDown('slow').fadeOut('300');

            //clone
            var $link = '<li class="my-list-item"><i class="fa fa-times-circle list-itme-icons remove-list-i"></i><i class="fa fa-paint-brush list-itme-icons change-color"></i><i class="fa fa-font list-itme-icons a-chage-text"></i><input type="text" maxlength="25" class="change-title-ln"><a href="../' +$url + '" class="bc-bolor" target="_blank"><p class="color1"><i class="fa fa-share-square-o"></i><span class="l-title">' +$title+ '</span></p></a></li>';

            //save in my list
            function appendToStorage(name, data){
                var old = localStorage.getItem(name);
                if(old === null) old = "";
                localStorage.setItem(name, old + data);
            }

            appendToStorage('myList', $link); 
            
        }
});    
    

    

// REMOVE LIST ITEM 
var $storeColor;
var $storeId;    

$(document).on('click', '.remove-list-i', function(){
    $('.close-create-popup').fadeIn('300'); 
    $(this).closest('li').attr('data-info', 'remove');
    $storeId = $(this).closest('li').attr('id');
});

$('#remove-li').on('click', function(e){
    removeThisLink();
    saveList();
    checkListSize();
    checkListLength();
    showNumberOfLinksInList();
    e.preventDefault();
});

function removeThisLink(){
    $('#link-list').find('li[data-info="remove"]').remove();
    $('.close-create-popup').hide();
}

/********************************************************** MY LIST ITEMS MANIPULATIN ****/ 

    
//SORTABLE LIST - WOKING ONLY ON MY LIST PAGE AS
//ONLY THAT PAGE HAS JQUERY UI SCIPT
if($('body').hasClass('my-list')) {    
$('#link-list').sortable({
    axis: 'y'
});
}    
$('#link-list').on('mouseup', 'li', function(){
    setTimeout(function(){
        saveList();
    },100);
});    
    
    
//SHOW COLOR PALAT
var $colorCounter = 2;

$(document).on('click', '.change-color', function(){
    $('.color-palat').remove(); 
    var colorPalat = '<div class="color-palat"><i class="fa fa-times-circle list-itme-icons close-color-palat"></i><i class="fa fa-tint" aria-hidden="true"></i><ul><li><div class="color1"></div><li><li><div class="color2"></div><li><li><div class="color3"></div><li><li><div class="color4"></div><li><li class="h-exx-s"><div class="color5"></div><li><li class="h-exx-s"><div class="color6"></div><li><li class="h-exx-s"><div class="color7"></div><li><li class="h-on-s"><div class="color8"></div><li><li class="h-on-s"><div class="color9"></div><li></ul></div>';
    
    $(this).closest('li').append(colorPalat);
});
    
// CHANGE THE COLOR
$(document).on('click', '.color-palat div', function() {
    var $color = $(this).attr('class');
    $(this).closest('.my-list-item').find('a').find('p').attr('class',$color);
    $('.color-palat').remove();
  
});    
    
// HIDE COLOR PALAT
$(document).on('click', '.close-color-palat', function(){
    $(this).closest('div').remove();
});    

//CHANGE THE TITLE
$(document).on('click', '.a-chage-text', function(e){
    var $this = $(this);
    var $backgroundColor = $this.closest('li').find('p[class^="color"]').css('background-color');
    $('.change-title-ln').css('background-color', $backgroundColor);
    $('.change-title-ln').hide();
    var title = $this.closest('li').find('.l-title').html();
    $this.closest('li').find('.change-title-ln').show().focus();
    $this.closest('li').find('.change-title-ln').val(title).select();
});

// hide input with click on document    
$(document).on('click', function(event) {
    var changeColorBtn = $('.a-chage-text').attr('class');
    var $target = $(event.target).attr('class');
    
    // check if the click is on A - chage text btn
    if ( $target == changeColorBtn ) {
        return;
    }else {
        if ( $('.change-title-ln').is(':visible') ) {
           $('.change-title-ln').hide();
            saveList();
        }
    }
});



               
               
//CHANGE THE TITLE ON BLUR AND ENTER
$(document).on('keypress', '.change-title-ln', function(e){
    var $input = $(this).closest('li').find('.change-title-ln').val();
    var $this = $(this);
    if (e.which == 13) {
        if ($('.change-title-ln').is(':visible')){
            $this.closest('li').find('.l-title').text($input);
            $this.closest('li').find('.change-title-ln').hide();
        }
        //save in local storage
        saveList();
    }
    
});  
    

//REMOVE ALL LINKS IN MY LIST   
$('#remove-all-links a').on('click', function(e){
    $('#remove-all-links span').toggle();
    e.preventDefault();
});    
//REMOVE ALL ITEMS - YES
$('#yes').on('click', function(){
    $('#link-list li').remove();
    $('#remove-all-links span').hide();
    saveList();
    checkListSize();
    checkListLength();
    $('#addExternal').show();
    showNumberOfLinksInList();
});    

$('#no').on('click', function(){
    $('#remove-all-links span').hide();
});   
    

   
    
/************************************************************ ADD EXTERNAL LINK ***/

    
//EXTERNAL POPUP    
$('#add-external-link').on('click', function(e){
    e.preventDefault();

    //check the size of the list
    for(var x in localStorage) {
        if ( x === 'myList' ) {
            var $myListSize = (((localStorage[x].length * 2)/1024/1024).toFixed(2));
        }
    } 
    
    if($myListSize == 1.25) {
        e.preventDefault();
    }else {
        $('.add-external-popup').fadeIn('300');
        //empty error messages
        $('#error-external-title').html('&nbsp;');
        $('#error-external-url').html('&nbsp;');

        // empty input messages
        $('#external-title').val(''); 
        $('#external-url').val('');
    }
    
    $('#external-title').focus();
});
 


//ADD EXTENRAL LINK
$('#add-external-url').on('click', function(e){
    e.preventDefault();
    makeExternalLink();
    showNumberOfLinksInList();
});    

    
//ADD EXTERNAL LINK WITH ENTER
if ($('body').is('.my-list')) {
    $(document).on('keypress', function(e) {
        if ( e.which == 13 ) {
            makeExternalLink();
        }
    });
}

function makeExternalLink() {
     var $title = $('#external-title').val();
    var $url = $('#external-url').val();
    var $errorExternalTitle = $('#error-external-title');
    var $errorExternalUrl = $('#error-external-url'); 

    // check for the size of the list
    for(var x in localStorage) {
        if ( x === 'myList' ) {
            var $myListSize = (((localStorage[x].length * 2)/1024/1024).toFixed(2));
        }
    }  

    //change counter
    if ( $myListSize == 1.25) {
        e.preventDefault();
    }else {
            
            if($title.length > 0 && $url.length > 0) {


            var $link = '<li class="my-list-item"><i class="fa fa-times-circle list-itme-icons remove-list-i"></i><i class="fa fa-paint-brush list-itme-icons change-color"></i><i class="fa fa-font list-itme-icons a-chage-text"></i><input type="text" maxlength="25" class="change-title-ln"><a href="' +$url + '" class="bc-bolor" target="_blank"><p class="color1"><i class="fa fa-share-square-o"></i><span class="l-title">' +$title+ '</span></p></a></li>';

            $('.add-external-popup').fadeOut('300');
            }else {
                 if($title.length === 0){
                    $errorExternalTitle.html('Please enter a title'); 

                }else {
                    $errorExternalTitle.html('&nbsp;'); 
                } 

                if($url.length === 0) {
                    $errorExternalUrl.html('Please enter a url'); 
                }else {
                     $errorExternalUrl.html('&nbsp;');
                    }
            }
            //add link
            $('#link-list').append($link);

            saveList();   

            // add list size info
            checkListSize();   
            checkListLength();    
    }    
}    
    
// show number of links in my list
function showNumberOfLinksInList() {
    var $listLengthNumber = $('.items li').length;     
    $('.list-counter').html($listLengthNumber + ' Links');
}    
showNumberOfLinksInList();    
    
    
/************************************************************** SAVE MY LIST *****/
    
function saveList() {
    var $myList = $('#link-list').html();
    localStorage.setItem('myList', $myList);
}
    
    
    
/*************************************************** COUNT ITEMS IN THE LIST *****/    
/*    
//LIST ITEM COUNT    
function countItems() {
    var $listLength = parseInt($('#link-list li').length);
    var $counter = $('#list-num-of-items');
    
    $counter.html($listLength);
    
    //hide and show empty list
    if ($listLength == 0) {
        $('#empty-list-msg').show();
    } else {
        $('#empty-list-msg').hide();
    }
    
    //hide and show add external link
    if ($listLength >= 20) {
        $('#addExternal').hide();
    } else {
        $('#addExternal').show();
    }
    
}    
countItems();
*/    



/*************************************************************** EMAIL ***********/    
    
$('#email').on('click', function(e){
    xhrFunc('popups/mail.html', '#popups');
    $('#show-mail').fadeIn('300');
    e.preventDefault();
});    
    

/*************************************************************** OPEN POPUPS *****/  

var popups = $('#popups');
    
var xhr;
// check for IE    
if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
// show popups
function xhrFunc(url, elem) {
    var $popups = $(elem)[0];

    xhr.open('GET', url, false);
    xhr.onreadystatechange = function() {
        if ( (xhr.readyState == 4) && (xhr.status == 200) ) {
            $popups.innerHTML = xhr.response;
        }
    }
    xhr.send(null); 
}

(function(){
    xhrFunc('popups/footer-feature.html', '#foot-featured');
})();
    
    
/*************************************************************** CLOSE POUPS *****/

// X CLOSE
$(document).on('click', '#close', function(){
    closePopup();
});
 
// CLOSE MAIL    
$(document).on('click', '#close-mail', function(){
    $('#show-mail').fadeOut('300');
});    

// CANCLE CLOSE
$(document).on('click', '.cancle', function(e){
    $('.items li').removeAttr('data-info');
    closePopup();
    e.preventDefault();
});

// CLOSE ALL POPUPS
function closePopup() {
    var $popup = $('.hide-popup');

    if($('#show-create-popup').is(':visible')) {
        $('#create-list').fadeIn('300');
    }
    
    $popup.fadeOut('300');
}

// CLOSE POPUPS WHEN CLICKED OUTSIDE THE DIV
$(document).on('click', '.bg-trans', function(e){
        if ( e.target !== this) {
            return;
        }else {
            if ( $('#show-create-popup').is(':visible') ) {
                $("#create-list").show();
            }
            $(this).fadeOut('300');
            
        }
});
    
    
/*************************************************** SIDE SHARE ANIMATION AND ADDS*********/
    
var $headerPosition = $('.sub-header').offset().top;       
var $windowWidth = $(window).width();
    
//  SHOW AND HIDE SIDE SHARE ON SCROLL AND
//  HIDE IT IF THE WINDOW WIDTH IS LESS THAN 1200PX    
$(window).on('scroll resize', function() {
    
    var $windowScroll = $(window).scrollTop();
    var $windowWidth = $(window).width();
    
     if ( $windowWidth <= 1200 ) {
         $('#side-menu-share').hide();
    } else {
        if ( $windowScroll >= $headerPosition) {
        $('#side-menu-share').fadeIn(300);
        }else {
            $('#side-menu-share').fadeOut(100);
        }
    }      
});
    
// PUT ADDS ON THE TOP OF THE SCREEN ON SCROLL EVENT
var sideAddHeight = $('.g-ads-rb').offset().top - 10;

$(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop();
    
    if ( scrollPosition >= sideAddHeight ) {
        $('.g-ads-rb').addClass('fixt-add');
    }else {
        $('.g-ads-rb').removeClass('fixt-add');
    }
});
    
/******************************************************** CALCULATE LOCAL STORAGE *********/    

function checkListSize() {
    for(var x in localStorage) {
        if ( x === 'myList' ) {
            var $myListSize = (((localStorage[x].length * 2)/1024/1024).toFixed(2));
                $('#list-num-of-items').html($myListSize);
        }
    }    
    // HIDE EXTERNAL LIST ITME IF LIST IS FULL    
    if ($myListSize == 1.25) {
        $('#addExternal').hide();
    }
}    
checkListSize();
/************************************************************ FIX POSIBLES ERRORS *********/


var $errorTitle = $('#title-of-list').html();
if ($errorTitle == 'undefined' || $errorTitle == 'null') {$('#title-of-list').html('My list');}
var $errorProfileImg = $('#profile-photo').attr('src');
if ($errorProfileImg == 'undefined' || $errorProfileImg == 'null') {$('#profile-photo').attr('src', 'img/my-list/1.png');}






// LOCAL STORAGE

/*
if (localStorage) {
  // LocalStorage is supported!
} else {
  // No support. Use a fallback such as browser cookies or store on the server.
}

// Functions
localStorage.setItem('name', 'Matt West');

// Object
localStorage.name = 'Matt West';

// Array
localStorage['name'] = 'Matt West';

*/
  
  
  
})(jQuery);