(function() {
  
  angular.module('cdup', ['ngRoute', 'ngFileUpload', 'cdup.home', 'cdup.newAccount', 'cdup.login', 'cdup.searchAccounts', 'cdup.uploadFile', 'cdup.viewFiles'])
    
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/home'});

  }]);

})();
