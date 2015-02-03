/**
 * @ngdoc module
 * @name mS
 * @module mS
 */
angular.module('invius', [
    'ngAnimate',
    'ngRoute',
    'templates-app',
    'invius.home',
    'invius.brand',
    'invius.header'
])

.config([
    '$locationProvider',
    '$routeProvider',
    'APP_CONFIG',
    function (
        $locationProvider,
        $routeProvider,
        APP_CONFIG
    ) {
        'use strict';

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('!');

        $routeProvider.otherwise({
            redirectTo: '/home'
        });

        //console.log('config', APP_CONFIG);
    }
])

.run(['$http',
    function ($http) {
        'use strict';
    }
]);

deferredBootstrapper.bootstrap({
    element: document.body,
    module: 'invius',
    resolve: {
        APP_CONFIG: ['$q', '$http',
            function ($q, $http) {
                'use strict';
                var defer = $q.defer();

                $http.get('/src/config.json').then(function (data) {
                    defer.resolve(data);
                });

                return defer.promise;
            }
        ]
    }
});
