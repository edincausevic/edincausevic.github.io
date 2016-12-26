// SERVICE
weatherApp.service('cityService', function(){
	
	this.city = 'London, UK';
});


weatherApp.service('weatherService', ['$http', function($http){

	this.getWeather = function(city, days) {

		return $http({
			  method: 'GET',
			  url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&cnt='+days+'&units=metric&APPID=5f50efb12206305219763871a0f93d08'
			})
			.then(function successCallback(response) {
				// WHETHER APP DATA
				return response.data;
			}, function errorCallback(response) {
				console.log('error:' + response)
			});
	}
}]);