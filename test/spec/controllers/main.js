'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('jsCajonYeomanApp'));

  var MainCtrl,
    scope,
    song;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    song = jasmine.createSpyObj('song', ['play']);
    MainCtrl = $controller('MainCtrl', {
      $scope: scope, 
      song: song
    });
  }));

  it('initial velocity should be set to 200 ms', function () {
    expect(scope.velocity).toBe(200);
  });

  it('it is possible to play the song', function () {
    expect(scope.playSong).toBeTruthy();
  });

  it('it is possible to delete the song', function () {
    expect(scope.deleteSong).toBeTruthy();
  });

});
