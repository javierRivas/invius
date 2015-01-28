angular.module('invius.brand', [
    'ngRoute'
])

.config(['$routeProvider',
    function ($routeProvider) {
        'use strict';

        $routeProvider.when('/brand', {
            title: 'brand',
            section: 'brand',
            controller: 'BrandController',
            templateUrl: 'branches/brand/brand.tpl.html'
        });
    }
])

.controller('BrandController', ['$scope',
    function ($scope) {
        'use strict';

        $scope.content = 'INVIUS - Our organization is focused on equipping leaders with the tools and resources' +
            ' to be able to step out and become who they really are.  (I know it sounds vague, but that is because how we' +
            ' equip them is going to take some capital as well as a very defined list of venture capitalists from' +
            ' Leaders Inspire Leaders).';
    }
]);
