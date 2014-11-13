'use strict';
(function () {
    angular.module('modAjax', []).factory('ajax', ['$http', function ($http) {
        return {
            get: function (url, params) {
                if (!params) {
                    params = {};
                }
                return $http({
                    method: 'GET',
                    utl: url,
                    params: params
                });
            },
            post: function (url, params) {
                if (!params) {
                    params = {};
                }
                return $http({
                    method: 'POST',
                    url: url,
                    params: $.params(params)
                });
            }
        };
    }]);
})();