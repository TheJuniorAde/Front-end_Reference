'use strict';
(function () {
    angular.module('modHome', ['$scope'])
        .controller('homeCtrl', ['$scope', function ($scope){
            $scope.message = "Now viewing home!";
        }]);
})();