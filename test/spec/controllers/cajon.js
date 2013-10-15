'use strict';

describe('ControllerCajon', function () {

  // load the controller's module
  beforeEach(module('jsCajonYeomanApp'));

  var CajonCtrl,
    scope,
    sounds,
    sound;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    sound = jasmine.createSpyObj('sound', ['play']);
    sounds = jasmine.createSpyObj('sounds', ['agudoAlto', 'agudoBajo', 'graveAlto', 'graveBajo']);
    sounds.agudoAlto.andReturn(sound);
    CajonCtrl = $controller('CajonCtrl', {
      $scope: scope,
      sounds: sounds
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

  it('plays agudo alto sound in the left', function(){
    scope.agudoIzqFuerte();
    expect(sounds.agudoAlto).toHaveBeenCalled();
  });

  it('plays agudo alto sound in the right', function(){
    scope.agudoDerFuerte();
    expect(sounds.agudoAlto).toHaveBeenCalled();
  });

  it('plays agudo bajo sound in the left', function(){
    scope.agudoIzqFlojo();
    expect(sounds.agudoBajo).toHaveBeenCalled();
  });

  it('plays agudo bajo sound in the right', function(){
    scope.agudoDerFlojo();
    expect(sounds.agudoBajo).toHaveBeenCalled();
  });

  it('plays grave alto sound in the left', function(){
    scope.graveIzqFuerte();
    expect(sounds.graveAlto).toHaveBeenCalled();
  });

  it('plays grave alto sound in the right', function(){
    scope.graveDerFuerte();
    expect(sounds.graveAlto).toHaveBeenCalled();
  });

  it('plays grave bajo sound in the left', function(){
    scope.graveIzqFlojo();
    expect(sounds.graveBajo).toHaveBeenCalled();
  });

  it('plays grave bajo sound in the right', function(){
    scope.graveDerFlojo();
    expect(sounds.graveBajo).toHaveBeenCalled();
  });

});
