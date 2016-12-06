var app = angular.module('myApp', ["firebase"]);

app.filter('filterString', function(){

    return function(string) {
        if ( string.length > 90 ) {
            return string.slice(0,90) + '...';
        }else {
            return string;
        }
    }
});