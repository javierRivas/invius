angular.module('invius.home', [
    'ngRoute'
])

.config(['$routeProvider',
    function ($routeProvider) {
        'use strict';

        $routeProvider.when('/home', {
            title: 'cart',
            section: 'cart',
            controller: 'homeController',
            templateUrl: 'branches/home/home.tpl.html'
        });
    }
])

.controller('homeController', [

    function () {

    }

])

;
