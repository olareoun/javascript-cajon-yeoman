/*global buzz:false */

'use strict';

angular.module('jsCajonYeomanApp')

	.factory('sounds', function(){

	var graveAlto = new buzz.sound( 'sounds/grave-alto', {
	    formats: [ 'ogg' ]
		});
	var graveBajo = new buzz.sound( 'sounds/grave-bajo', {
	    formats: [ 'ogg' ]
		});
	var agudoAlto = new buzz.sound( 'sounds/agudo-alto', {
	    formats: [ 'ogg' ]
		});
	var agudoBajo = new buzz.sound( 'sounds/agudo-bajo', {
	    formats: [ 'ogg' ]
		});

	var playSound = function(sound){
		return function(){
			sound.play();
		};
	};

	return{
		graveAlto: playSound(graveAlto),
		graveBajo: playSound(graveBajo),
		agudoAlto: playSound(agudoAlto),
		agudoBajo: playSound(agudoBajo)
	};

});