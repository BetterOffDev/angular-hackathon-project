(function() {

	angular.module('cdup.newAccount', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/newAccount', {
	    templateUrl: 'dist/app/newAccount/newAccount.html',
	    controller: 'NewAccountCtrl'
	  });
	}])

	.controller('NewAccountCtrl', [function() {

	}]);

})();