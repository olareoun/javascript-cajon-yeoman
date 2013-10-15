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

    song = jasmine.createSpyObj('song', ['record']);

    CajonCtrl = $controller('CajonCtrl', {
      $scope: scope,
      sounds: sounds,
      song: song
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

  describe("recording sounds in song", function(){
    it('should record an agudo alto when agudo alto left', function(){
      scope.agudoIzqFuerte();
      expect(song.record).toHaveBeenCalledWith(sounds.agudoAlto);
    });
    it('should record an agudo bajo when agudo bajo left', function(){
      scope.agudoIzqFlojo();
      expect(song.record).toHaveBeenCalledWith(sounds.agudoBajo);
    });
    it('should record an agudo alto when agudo alto right', function(){
      scope.agudoDerFuerte();
      expect(song.record).toHaveBeenCalledWith(sounds.agudoAlto);
    });
    it('should record an agudo bajo when agudo bajo right', function(){
      scope.agudoDerFlojo();
      expect(song.record).toHaveBeenCalledWith(sounds.agudoBajo);
    });
    it('should record an grave alto when grave alto left', function(){
      scope.graveIzqFuerte();
      expect(song.record).toHaveBeenCalledWith(sounds.graveAlto);
    });
    it('should record an grave bajo when grave bajo left', function(){
      scope.graveIzqFlojo();
      expect(song.record).toHaveBeenCalledWith(sounds.graveBajo);
    });
    it('should record an grave alto when grave alto right', function(){
      scope.graveDerFuerte();
      expect(song.record).toHaveBeenCalledWith(sounds.graveAlto);
    });
    it('should record an grave bajo when grave bajo right', function(){
      scope.graveDerFlojo();
      expect(song.record).toHaveBeenCalledWith(sounds.graveBajo);
    });
  });

});
