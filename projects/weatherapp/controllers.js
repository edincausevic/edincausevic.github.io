
// MAIN CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){

	$scope.city = cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});

	$scope.submit = function() {
		$location.path('/forecast');
	}
}]);


// WEATHER CONTROLLER
weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService){
	//http://api.openweathermap.org/data/2.5/forecast/daily + &APPID=5f50efb12206305219763871a0f93d08 - whaher app unloack code
	$scope.city = cityService.city;
	$scope.days =  $routeParams.days || '2';

	weatherService.getWeather($scope.city, $scope.days).then( function(data){  

		$scope.data = data.list;
		console.log($scope.data)
	});
	
	
	$scope.converToDate = function(dt) {
		return new Date(dt * 1000)
	}
	
	
}]);