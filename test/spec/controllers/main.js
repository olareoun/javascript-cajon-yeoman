'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('jsCajonYeomanApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('initial velocity should be set to 200 ms', function () {
    expect(scope.velocity).toBe(200);
  });
});
