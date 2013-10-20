var song;
 
describe('song service', function(){
  beforeEach(module('jsCajonYeomanApp'));

  var sound, sounds, partitura;

  beforeEach(function() {

    sound = jasmine.createSpyObj('sound', ['play']);
    sounds = jasmine.createSpyObj('sounds', ['agudoAlto', 'agudoBajo', 'graveAlto', 'graveBajo']);
    sounds.agudoAlto.andReturn(sound);

    inject(function($injector) {
      song = $injector.get('song');
    });
  });

  it('should have a function to add sounds to song', function() {
    expect(song.record).toBeTruthy();
  });

  it('is empty when created', function(){
    expect(song.empty()).toBeTruthy();
  });

  it('is not empty if sound recorded', function(){
    song.record(sounds.agudoAlto);
    expect(song.empty()).toBeFalsy();
  });

  it('when one sound added, it comes up when next is called', function(){
    song.record(sounds.agudoAlto);
    expect(song.next()).toBe(sounds.agudoAlto);
  });

  it('should be fifo', function(){
    song.record(sounds.agudoAlto);
    song.record(sounds.agudoBajo);
    expect(song.next()).toBe(sounds.agudoAlto);
    expect(song.next()).toBe(sounds.agudoBajo);
  });

  it('should not be deleted when played', function(){
    song.record(sounds.agudoAlto);
    song.record(sounds.agudoBajo);
    song.next();
    song.next();
    expect(song.empty()).toBeFalsy();
  });

  it('should be ended when all sounds where iterated', function(){
    song.record(sounds.agudoAlto);
    song.record(sounds.agudoBajo);
    song.next();
    song.next();
    expect(song.ended()).toBeTruthy();
  });

  it('can be restarted', function(){
    song.record(sounds.agudoAlto);
    song.record(sounds.agudoBajo);
    song.next();
    song.restart();
    expect(song.next()).toBe(sounds.agudoAlto);
  });

  it('can be deleted', function(){
    song.record(sounds.agudoAlto);
    song.record(sounds.agudoBajo);
    song.delete();
    expect(song.empty()).toBeTruthy();
  });

});
 
