describe('invius brand', function () {
    'use strict';
    beforeEach(module('invius.brand'));

    describe('BrandController', function () {
        var scope,
            controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it('should assign text to content', function () {
            controller('BrandController', {
                $scope: scope
            });
            expect(scope.content).toBe('INVIUS - Our organization is focused on equipping leaders with the tools and resources' +
                ' to be able to step out and become who they really are.  (I know it sounds vague, but that is because how we' +
                ' equip them is going to take some capital as well as a very defined list of venture capitalists from' +
                ' Leaders Inspire Leaders).');
        });
    });
});
