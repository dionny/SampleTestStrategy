(function () {
    'use strict';

    angular
        .module('sampleProjectApp')
        .factory('LogsService', LogsService);

    LogsService.$inject = ['$resource'];

    function LogsService($resource) {
        var service = $resource('api/logs', {}, {
            'findAll': {method: 'GET', isArray: true},
            'changeLevel': {method: 'PUT'}
        });

        return service;
    }
})();
