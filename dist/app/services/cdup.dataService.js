(function() {
	
	angular.module('cdup')

		.service('dataService', ['$http', function ($http) {

			var dataUrl = 'http://labratsappl-env.elasticbeanstalk.com';

			this.getFiles = function() {
				/*return $http({
					method: 'JSONP',
					url: dataUrl + '/spring/loadDocuments?id=9999',
					responseType: 'json'

				}).then(function(results, status) {
						return results;
				});*/
				return $http.get(dataUrl+'/spring/loadDocuments?id=9999')
				.then(function(results) {
					return results;
				});
		
					
			};

			this.getCustomer = function() {
				return $http.get(dataUrl+'/spring/loadCustomer?id=9999')
					.then(function(results) {
						return results;
					});
			};

		}]);
})();