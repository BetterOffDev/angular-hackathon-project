(function() {

	angular.module('cdup.login', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/login', {
	    templateUrl: 'dist/app/login/login.html',
	    controller: 'LoginCtrl'
	  });
	}])

	.controller('LoginCtrl', [function() {

	}]);

})();