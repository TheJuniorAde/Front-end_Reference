'use strict';
(function () {
    angular.module('modLogin', ['modAjax']) // you don't need to inject $scope
        .controller('loginCtrl', ['modAjax', '$scope', function (ajax, $scope) {
            $scope.message = "to no login";

            function fazerLogin(url, params) {
                $scope.message = "cliquei no fazerLogin";

                if ($("#username").val().length != 0 && $("#password").val().length != 0) {
                    $("#button1").removeClass("hidden").animate({ left: '250px' });;
                    $("#lock1").addClass("hidden").animate({ left: '250px' });;
                } else {
                    var url = "";
                    var params = [$("#username").val(), $("#password").val()];
                    return ajax.post(url, params);
                }
            }

        }])

})();
