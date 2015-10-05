(function() {
    "use strict";

    angular.module('register.service', [])
        //factory/service/provider
        .factory('RegisterService', ['$http', 'domain',
            function($http, domain) {
                var service = {
                    register: function(user) {
                        return $http.post(domain + '/users', user);
                    }
                };

                return service;
            }
        ]);
})();
