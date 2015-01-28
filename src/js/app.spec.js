describe('invius', function () {
    'use strict';

    describe('Bootstrapping', function () {
        it('should load config.json file before the main application is bootstrapped', inject(function () {}));
    });

    describe('StoreCtrl', function () {

        var StoreCtrl, $location, $scope, $httpBackend;

        beforeEach(module('invius'));

    });

    describe('Invius Routing', function () {
        beforeEach(module('invius'));

        it('should redirect index.html to /home', function () {
            //$browser.$get('/index.html');

        });
    });
});
