(function() {

	angular.module('cdup.home', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/home', {
	    templateUrl: 'dist/app/home/home.html',
	    controller: 'HomeCtrl'
	  });
	}])

	.controller('HomeCtrl', [function() {

	}]);

})();