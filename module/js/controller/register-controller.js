(function() {
    "use strict";

    angular.module('register.controller', [])
        .controller('RegisterCtrl', ['$scope', 'RegisterService', function($scope, RegisterService) {
            //$scope vs controller as
            var self = this;

            self.user = {};

            self.register = function(user) {
            	//promise
                RegisterService.register(user)
                    .then(function(response) {
                        alert(JSON.stringify(response.data));
                    })
                    .catch(function() {
                    	alert('fail');
                    });
            };
        }]);
})();
