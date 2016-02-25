(function() {

	angular.module('cdup.searchAccounts', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/searchAccounts', {
	    templateUrl: 'dist/app/searchAccounts/searchAccounts.html',
	    controller: 'SearchAccountsCtrl'
	  });
	}])

	.controller('SearchAccountsCtrl', [function() {

	}]);

})();