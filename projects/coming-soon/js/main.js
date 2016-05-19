/*
 * 
 * Main Javascript
 */
/********************************/
/*Timer
/********************************/
jQuery.noConflict()(function($){
	$(document).ready(function() {
    /**
    * Set your date here  (YEAR, MONTH (0 for January/11 for December), DAY, HOUR, MINUTE, SECOND)
    * according to the GMT+0 Timezone
    **/
    var launch = new Date(2016, 06, 14, 11, 00);
    /**
    * The script
    **/
    var message = $('#message');
    var days = $('#days');
    var hours = $('#hours');
    var minutes = $('#minutes');
    var seconds = $('#seconds');
    
    setDate();
    function setDate(){
        var now = new Date();
        if( launch < now ){
            days.html('<strong>0</strong><p>Day</p>');
            hours.html('<strong>0</strong><p>Hour</p>');
            minutes.html('<strong>0</strong><p>Minute</p>');
            seconds.html('<strong>0</strong><p>Second</p>');
            message.html('We are truly sorry for our delay, but our website is coming...');
        }
        else{
            var s = -now.getTimezoneOffset()*60 + (launch.getTime() - now.getTime())/1000;
            var d = Math.floor(s/86400);
            days.html('<strong>'+d+'</strong><p>Day'+(d>1?'s':''),'</p>');
            s -= d*86400;

            var h = Math.floor(s/3600);
            hours.html('<strong>'+h+'</strong><p>Hour'+(h>1?'s':''),'</p>');
            s -= h*3600;

            var m = Math.floor(s/60);
            minutes.html('<strong>'+m+'</strong><p>Minute'+(m>1?'s':''),'</p>');

            s = Math.floor(s-m*60);
            seconds.html('<strong>'+s+'</strong><p>Second'+(s>1?'s':''),'</p>');
            setTimeout(setDate, 1000);

            message.html('Welcome ! Unfortunately, we’re not ready now. But, the launch day is coming !');
        }
    } 
	});
});


$(document).ready(function() {
    var shown = 0;
    function slide() {
        if (shown === 0) {
            $('.b-photo3').fadeOut(2000);
            $('.b-photo1').fadeIn(2000);
        }
        if (shown === 1) {
            $('.b-photo1').fadeOut(2000);
            $('.b-photo2').fadeIn(2000);
        }
        if (shown === 2) {
            $('.b-photo2').fadeOut(2000);
            $('.b-photo3').fadeIn(2000);
        }
        shown = (shown+1)%3;
    }
    slide();
    window.setInterval( slide, 7000);
});

$(document).ready(function() {
    $('#promjenipozadinu').click(function() {
    $('.sharemenu').fadeToggle();
    });
});