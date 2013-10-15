'use strict';

describe('ControllerCajon', function () {

  // load the controller's module
  beforeEach(module('jsCajonYeomanApp'));

  var CajonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CajonCtrl = $controller('CajonCtrl', {
      $scope: scope
    });
  }));

  it('has hit controls', function () {
    expect(scope.agudoIzqFuerte).toBeTruthy();
    expect(scope.agudoIzqFlojo).toBeTruthy();
    expect(scope.agudoDerFuerte).toBeTruthy();
    expect(scope.agudoDerFlojo).toBeTruthy();
    expect(scope.graveIzqFuerte).toBeTruthy();
    expect(scope.graveIzqFlojo).toBeTruthy();
    expect(scope.graveDerFuerte).toBeTruthy();
    expect(scope.graveDerFlojo).toBeTruthy();
  });
});
