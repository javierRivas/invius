angular.module('invius.header', [])
    .directive('inviusHeader', function () {
        'use strict';
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: 'directives/invius-header/invius-header.tpl.html',
            controller: function ($scope) {
                //'use strict'
                //$scope.menuItems = ['Innovation', 'Vision', 'Success'];
                $scope.menuItems = [{
                    'link': 'brand',
                    'name': 'Innovation'
                }, {
                    'link': 'home',
                    'name': 'Vision'
                }, {
                    'link': 'brand',
                    'name': 'Success'
                }];
            }
        };
    });
