(function () {
    'use strict';

    angular
        .module('sampleProjectApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register($resource) {
        return $resource('api/register', {}, {});
    }
})();
