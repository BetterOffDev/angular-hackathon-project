(function() {

	angular.module('cdup.uploadFile', ['ngRoute', 'ngFileUpload'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/uploadFile', {
	    templateUrl: 'dist/app/uploadFile/uploadFile.html',
	    controller: 'UploadFileCtrl'
	  });
	}])

	.controller('UploadFileCtrl', ['$scope', 'Upload', 'S3UploadService', function ($scope, Upload, S3UploadService) {

	    $scope.uploadFiles = function (files) {
	        $scope.Files = files;
	        if (files && files.length > 0) {
	            angular.forEach($scope.Files, function (file, key) {
	                S3UploadService.Upload(file).then(function (result) {
	                    // Mark as success
	                    file.Success = true;
	                }, function (error) {
	                    // Mark the error
	                    $scope.Error = error;
	                }, function (progress) {
	                    // Write the progress as a percentage
	                    file.Progress = (progress.loaded / progress.total) * 100
	                });
	            });
	        }
	    };


	}]);

})();

