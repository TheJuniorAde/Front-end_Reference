'use strict';
myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        /*
          .when('/', {
              templateUrl: 'core/views/home/home.html',
              controller: 'homeCtrl'
          })
        */
          .when('/login', {
              templateUrl: 'core/views/login/login.html',
              controller: 'loginCtrl'
          })
          .otherwise({
              redirectTo: '/'
          });
    }]);
    