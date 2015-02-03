angular.module('invius.header', [])
    .directive('invius-header', function () {
        'use strict';
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: 'directives/invius-header/invius-header.tpl.html',
            controller: function ($scope) {
                'use strict';
                $scope.menuItems = ['Innovation', 'Vision', 'Success'];
            }
        };
    });
