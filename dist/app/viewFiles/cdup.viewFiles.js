(function() {

	angular.module('cdup.viewFiles', [])

		.controller('ViewFilesCtrl', ['$scope', '$http', 'dataService', function($scope, $http, dataService) {

			// $scope.files = [];

			// $scope.files = [
			// 	{
			// 		name: 'file1.pdf',
			// 		link: 'http://www.google.com',
			// 		date: '02/09/2016',
			// 		status: 'Received'
			// 	},
			// 	{
			// 		name: 'file2.pdf',
			// 		link: 'http://www.google.com',
			// 		date: '02/09/2016',
			// 		status: 'Received'
			// 	},
			// 	{
			// 		name: 'file3.pdf',
			// 		link: 'http://www.google.com',
			// 		date: '02/06/2016',
			// 		status: 'Complete'
			// 	},
			// 	{
			// 		name: 'file4.pdf',
			// 		link: 'http://www.google.com',
			// 		date: '02/08/2016',
			// 		status: 'In Progress'
			// 	}
			// ];

			getFiles();

			function getFiles() {
				return dataService.getFiles()
					.then(function(data) {
						$scope.files = data.data.documents;
						console.log(data);
					});
			}


		}]);

})();