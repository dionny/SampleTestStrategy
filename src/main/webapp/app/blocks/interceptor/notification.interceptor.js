(function () {
    'use strict';

    angular
        .module('sampleProjectApp')
        .factory('notificationInterceptor', notificationInterceptor);

    notificationInterceptor.$inject = ['$q', 'AlertService'];

    function notificationInterceptor($q, AlertService) {
        var service = {
            response: response
        };

        return service;

        function response(response) {
            var alertKey = response.headers('X-sampleProjectApp-alert');
            if (angular.isString(alertKey)) {
                AlertService.success(alertKey, {param: response.headers('X-sampleProjectApp-params')});
            }
            return response;
        }
    }
})();
