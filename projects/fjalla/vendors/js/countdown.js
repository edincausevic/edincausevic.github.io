jQuery.noConflict()(function($){
	$(document).ready(function() {
    /**
    * Set your date (YEAR, MONTH (0 for January/11 for December), DAY, HOUR, MINUTE, SECOND)
    **/
    var launch = new Date(2015, 06, 14, 11, 00); /* Edit date/time according to the GMT+0 Timezone*/

    var days = $('#days');
    var hours = $('#hours');
    var minutes = $('#minutes');
    var seconds = $('#seconds');
    
    setDate();
    function setDate(){
        var now = new Date();
        if( launch < now ){
            days.html('0');
            hours.html('0');
            minutes.html('0');
            seconds.html('0');
        }
        else{
            var s = -now.getTimezoneOffset()*60 + (launch.getTime() - now.getTime())/1000;
            var d = Math.floor(s/86400);
            days.html(d);
            s -= d*86400;

            var h = Math.floor(s/3600);
            hours.html(h);
            s -= h*3600;

            var m = Math.floor(s/60);
            minutes.html(m);

            s = Math.floor(s-m*60);
            seconds.html(s);
            setTimeout(setDate, 1000);
        }
    } 
	});
});
