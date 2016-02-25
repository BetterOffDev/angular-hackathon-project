(function() {
	
	angular.module('cdup')

		.directive('navigation', function() {

			return {
				restrict: 'E',
				templateUrl: 'dist/app/navigation/navigation.html'
			};
			
		});
})();