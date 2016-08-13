
// select element
function select( el ) {
    
    var elems;
    var ele = document.querySelectorAll( el );
    for ( var i = 0; i < ele.length; i++ ) {
        elems = ele[i];
    }
    return elems;
}

// animation
function animate( el, time, top, bottom, offsetTime, opacity) {

    setTimeout(function(){
        el.style.transition = 'all ' +time+ ' ease-in-out'; 
        el.style.top = top;
        el.style.bottom = bottom;
        el.style.opacity = opacity;
    }, offsetTime);
}

// ajax
var xhr

if ( XMLHttpRequest ) {
    xhr = new XMLHttpRequest;
}else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP"); 
}

function ajaxXHR(link, div) {
    
    var container = select(div);
    xhr.open('GET', link, false);
    xhr.onreadystatechange = function() {
        if ( (xhr.readyState === 4) && (xhr.status === 200) ) {
            container.innerHTML = xhr.response;
        }
    }
    xhr.send();
}

// save in local sotrage
function save(name, val) {
    localStorage.setItem(name,val);
}

// add zoom effect
function zoomAnimation(el) {

    var element = select(el);
    element.className = 'zoom';
}

// empty the popup containers
function emptyPopupsCon(time) {

    setTimeout(function(){
        var container1 = select('#img-slide');
        var container2 = select('#prfile-menu');
        container1.innerHTML = '';
        container2.innerHTML = '';
    },time);
}

// audio controler
var audio = new Audio('music/beep-07.mp3');
var music = new Audio('music/music.mp3');
var explotion = new Audio('music/explotion.wav');

function sound(input) {

    var sound = localStorage.sound;

    if ( sound === 'on' ) {

        music.loop = true;
        music.volume = 0.3;
        music.play(); 
        audio.volume = 1;
        explotion.volume = 1;

        if ( input === 'beep' ) {
            audio.play();
        }else if ( input === 'explotion') {
            explotion.play();
        }
    }else if ( sound === 'off' ) {
        music.pause();
        audio.volume = 0;
        explotion.volume = 0;
    } 

}

//preloader
var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}

preload('css/img/main-back.jpg',
        'img/atomic-bomb.png',
        'img/bomb.png',
        'img/bomb-zoom.jpg',
        'img/explotion.jpg',
        'img/success.jpg',
        'img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 
        'img/5.png', 'img/6.png', 'img/7.png', 'img/8.png', 
        'img/9.png', 'img/10.png', 'img/11.png')

/*************************************************** LOADING *************************/

// Loading screen - animate and start loading
window.onload = function() {
    
    //animate ( element, animeTime, topPosition, bottom, waitingTime, opacity)
    animate(select('#load-bomb'), '0.7s', '155px', null, 100, '1');
    animate(select('#disable'), '0.7s', '-6px', null, 500, '1');
    animate(select('#the'), '0.7s', '88px', null, 700, '1');
    animate(select('#bomb'), '0.7s', '177px', null, 1000, '1');
    animate(select('#loading-bar'), '1s', null, '50px', 800, '1');
    save('sound', 'on'); // save music status so it can play on first load
    soundControl();
    loading(); // start loadin bar animation
}


function loading() {
    
    var $loadBar = select('#inner-loading');
    var $proc = 0;
    var $barLength = select('#loading-bar').offsetWidth;

    var interval = setInterval(function() {
        var $num = Math.floor((Math.random() * 90) + 1);
        $proc += $num;
        if ( $proc > $barLength - 250 ) {   
            $loadBar.style.width = '100%';
            clearInterval(interval);
            
            // loading done 
            sound();
            if ( localStorage.name ) { 
                ajaxXHR('parts/play.html', '#prfile-menu');
                animate(select('#loading'), '0.3s', null, null, 100, '0');
                animate(select('#profile'), '0.3s', null, null, 100, '1');
                profilePlay();
                resetProfile();
            }else {
                ajaxXHR('parts/create-play.html', '#prfile-menu');
                //animate ( element, animeTime, topPosition, bottom, waitingTime, opacity)
                animate(select('#loading'), '0.3s', null, null, 100, '0');
                animate(select('#createProfile'), '0.3s', null, null, 100, '1');
                changeImage();
                makeProfile();
            }
        }else {
            $loadBar.style.width = $proc + 'px';
        }
    },1500); 
}


/***************************************** CREATE A PROFILE *************************/

// change image
function changeImage() {

    var img = select('#profileImage');
    var counter = 1;
    img.onclick = function() {
        counter++;
        if (counter === 12) counter = 1
        img.setAttribute('src', 'img/' + counter + '.png');
    }
}


// save profile in LS and play
function makeProfile() {

    var img = select('#profileImage');
    var input = select('#profile-name');
        input.focus();
    var btn = select('#createAndPlay');
    var error = select('#inputError');
    
    btn.onclick = function() {
        makeProfileSetup();
    }
    
    input.onkeyup = function(e) {
        if ( e.which === 13 ) {
            makeProfileSetup();
        }
    }
    
    function makeProfileSetup() {
        if ( input.value.length === 0 ) {
            error.innerHTML = 'Please enter a name!';
        }else {
            save('img', img.src);
            save('name', input.value);
            save('score', 0);
            save('levelScore', 5);
            save('countdown', 7);
            ajaxXHR('parts/bombAnimation.html', '#img-slide');
            //animate ( element, animeTime, topPosition, bottom, waitingTime, opacity)
            animate(select('#createProfile'), '1s', null, null, 100, '0');
            loadGameAnimationAndSetupMenu();
        }
    }
}

// profile created - play
function profilePlay() {

    var name = select('#prof-name');
    var img = select('#lsImage');
    var score = select('#score');
    var btn = select('#play-game');
    
    name.innerHTML = localStorage.name;
    img.setAttribute('src', localStorage.img);
    score.innerHTML = Math.round(localStorage.score);
    
    btn.onclick = function() {
        loadGameAnimationAndSetupMenu();
    }
}


function loadGameAnimationAndSetupMenu() {
    
    var loading = select('#loading');
    if ( loading ) { loading.remove(); }
    
    // load main menu info
    var img = select('#menu-image');
    img.setAttribute('src', localStorage.img);
    var name = select('#menuProfileName');
    name.innerHTML = localStorage.name;
    var score = select('#mainMenuScore');
    score.innerHTML = Math.round(localStorage.score);
    
    ajaxXHR('parts/bombAnimation.html', '#img-slide'); // add bomb img
    animate(select('#profile'), '1s', null, null, 100, '0'); // fadeOut Profile menu
    animate(select('#bombAnimation'), '1s', null, null, 100, '1'); //fadeIn bomb img
    setTimeout(function(){ zoomAnimation('#bomb-img') }, 100 ); // zoom in bom img
    setTimeout(function(){ animate(select('#bombAnimation'), '1s', null, null, 1000, '0'); }, 3000 ); // fadeOut bomb img
    setTimeout(function(){ animate(select('#main'), '1s', null, null, 1000, '1'); }, 3000 ); // fade in main
    
    emptyPopupsCon(5000);
    startGame();
}


/************************************** MAIN MENU - GAME *************************/


// remove the cover
function startGame() {

    var cover = select('#cover');
    
    cover.onclick = function() {
        cover.className = 'zoomCover';
        setTimeout(function(){ 
            cover.className = 'moveCover'; 
            start();
        }, 500);
    }
}


function soundControl() {

    var icon = select('#sound-icon');
    
    // load mucis icon base on music status in LS
    var music = localStorage.sound;
    if ( music == 'on' ) {
        icon.src = 'img/sound-on.png';
    }else if ( music == 'off' ) {
        icon.src = 'img/sound-off.png';
    }
    
    // change icon and control sound on icon click
    icon.onclick = function() {
        var musicState = localStorage.sound;
        if ( musicState == 'on' ) {
            icon.src = 'img/sound-off.png';
            localStorage.setItem('sound','off');
            sound();
            state = 'off';
        }else if ( musicState == 'off' ) {
            icon.src = 'img/sound-on.png';
            localStorage.setItem('sound','on');
            sound();
            state = 'on';
        }
    }
}
soundControl()

function start() {
    
    var chanse = 0.95; 
    
    var levelScore = localStorage.levelScore;  // number of active buttons
    var btns = document.querySelectorAll('#butns li');
    var activeBtns = document.querySelectorAll('#butns li.btn-active');
    var activeLength = activeBtns.length;   
    
    // activate some buttons
    while ( activeBtns.length < levelScore ) {
        for ( var i = 0; i < btns.length; i++ ) {
            var randomNumber = Math.random();
            if ( randomNumber > chanse ) {
                btns[i].className = 'btn-active';
            }
            activeBtns = document.querySelectorAll('#butns li.btn-active');
            activeLength = activeBtns.length;
            if ( activeBtns.length >= levelScore ) break;
        }
        if ( activeBtns.length >= levelScore ) break;
    } 
    
    for ( var i = 0; i < btns.length; i++ ) {
        btns[i].onclick = function() {
            if ( this.className == 'btn-active' ) {
                this.className = ''; // deactivati button
                
                sound('beep');
                
                var active = document.querySelectorAll('#butns li.btn-active');
                if ( active.length === 0 ) {
                    status  = true;
                }
            } 
        }
    }
    
    countdown(); // start countdown
}

var status = false;

function countdown() {
    
    var loadingBar = select('#menu-inner-loading');
    var time = parseInt(localStorage.countdown);
    var transitionTime = parseInt(localStorage.countdown) + 1;
    var main = select('#main');

    // counter
    var interval = setInterval(function(){
        if ( time === 1 ) clearInterval(interval);
        time -= 1;
        loadingBar.innerHTML = time;
        
        loadingBar.style.transition = 'width ' +transitionTime+ 's linear, background-color 1s linear';
        loadingBar.style.width = '0%'; 
    }, 1000);

        
    // check for win or lose status
    var intervalColor = setInterval(function(){
        
        if ( loadingBar.offsetWidth < 350 ) {loadingBar.style.backgroundColor = '#cad647';}
        if ( loadingBar.offsetWidth < 200 ) {loadingBar.style.backgroundColor = '#e84e32';}
        
        // bomb deactivated - win status
        if ( status == 'true' ) {
            clearInterval(intervalColor); // stop the counter
            clearInterval(interval); // stop the countdown bar
            var saveWidth = loadingBar.offsetWidth; // take the countdown bar width
            loadingBar.style.width = saveWidth - 34 + 'px'; // set the width of the bar
            ajaxXHR('parts/success.html', '#img-slide');  // add success bomb imge
            setTimeout(function(){ 
                animate(select('#success'), '1s', null, null, 100, '1'); 
            }, 100 ); // fadeIn succes bomb img
            setTimeout(function(){ 
                zoomAnimation('#bomb-img-success') 
                
            }, 50 ); // zoom in img
            setTimeout(function(){
                ajaxXHR('parts/play.html', '#prfile-menu'); // add profile
                var main = select('#main');
                main.style.opacity = '0';
                status = false;
                profilePlay();  // start profile function
                resetMainMenu();
                resetProfile();
                animate(select('#profile'), '1s', null, null, 100, '1');
                addScore(saveWidth);
            }, 3000);
            
            setTimeout(function(){ animate(select('#bomb-img-success'), '1s', null, null, 1000, '0'); }, 3000 ); // fadeOut bomb img
        }

        // explotion - lose state status   
        if ( time === 0 ) { 
            clearInterval(intervalColor); // stop the counter
            ajaxXHR('parts/explotion.html', '#img-slide');  // add explotion imge
            // show explotion    
            setTimeout(function(){
                sound('explotion');
                //animate ( element, animeTime, topPosition, bottom, waitingTime, opacity)
                animate(select('#explotion'), '0.3s', null, null, 100, '1');
                setTimeout(function(){ 
                    zoomAnimation('#explotion-img') 
                    var main = select('#main');
                    main.style.opacity = '0';
                }, 100 ); // zoom in bomb img
                
                setTimeout(function(){ 
                    animate(select('#explotion'), '1s', null, null, 1000, '0'); 
                }, 5000 ); // fadeOut bomb img
                
                setTimeout(function(){
                    ajaxXHR('parts/play.html', '#prfile-menu'); // add profile
                    profilePlay();  // start profile function
                    startGame();
                    resetMainMenu();
                    resetProfile();
                    animate(select('#profile'), '1s', null, null, 100, '1');
                }, 3000);
            },1000);
        }   
    }, 200);
    
}

function resetMainMenu() {
    
    var cover = select('#cover');
    var btns = document.querySelectorAll('#butns li');
    var container1 = select('#img-slide');
    var container2 = select('#prfile-menu');
    var loadingBar = select('#menu-inner-loading');
    
    cover.className = '';
    for ( var i = 0; i < btns.length; i++ ) {
        btns[i].className = '';
    }
    setTimeout(function(){ 
        container1.innerHTML = '';
        //container2.innerHTML = '';
    }, 1000);
    loadingBar.style.backgroundColor = '#47d55b';
    loadingBar.style.transition = '';
    loadingBar.style.width = '100%';
    loadingBar.innerHTML = parseInt(localStorage.countdown);
    console.log(localStorage.countdown)
}

// remove all localStorage and reload the window
function resetProfile() {

    var profileBtn = select('#reset-btn');
    profileBtn.onclick = function() {
        localStorage.clear();
        location.reload();
    }
}

function addScore(width) {

    
    var scoreLs = parseInt(localStorage.score);
    // take 3% of loading bar width as score
    var score = (width / 100) * 3;
    var newScore = scoreLs + score;
    localStorage.setItem('score', newScore);
    
    var scoreDOC = select('#score');
    scoreDOC.innerHTML = Math.round(newScore);
    
    var level = parseInt(localStorage.levelScore);
    var newLevel = level + 3;
    localStorage.levelScore = newLevel;
    
    var time = parseInt(localStorage.countdown);
    var newTime = time + 1;
    localStorage.countdown = newTime;
    
}


/*
// setup level hardnes and save it
function setLevel() {

    var maxVal = 0.99;          
    var scoreZero = '0.' + localStorage.score;       
    var level = maxVal - scoreZero;  
    save('level', level);        
}
*/

/* stavi kad pobjedis
// load score in main menu
var score = select('#mainMenuScore');
score.innerHTML = localStorage.score;
*/

















