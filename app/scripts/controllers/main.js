/*global $:false */
/*global buzz:false */

'use strict';

angular.module('jsCajonYeomanApp')
  .controller('MainCtrl', function ($scope) {

	var song = [];

	$scope.velocity = 200;

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

	$('.grave-a').click(function(){
	    playAndRecord(playGraveAlto, $(this));
		});
	$('.grave-b').click(function(){
	    playAndRecord(playGraveBajo, $(this));
		});
	$('.agudo-a').click(function(){
	    playAndRecord(playAgudoAlto, $(this));
		});
	$('.agudo-b').click(function(){
	    playAndRecord(playAgudoBajo, $(this));
		});

	var playAndRecord = function(sound, hitControl){
	    sound(hitControl);
	    song.push(function(){
				sound(hitControl);
			});
		};

	$scope.mierda = 'mierda';

	$scope.playSong = function(){
		if (song.length > 0) {
	    var songCopy = song.slice(0);
	    songCopy.reverse();
	    var songInterval = setInterval(function(){
	        songCopy.pop()();
	        if (songCopy.length === 0){
						window.clearInterval(songInterval);
	        }
				}, $scope.velocity);
		}
	};

	$scope.deleteSong = function(){
	    song.length = 0;
		};

	var playGraveAlto = function(hitControl){
	    hitControl.fadeOut('fast');
	    hitControl.fadeIn('fast');
	    graveAlto.play();
		};

	var playGraveBajo = function(hitControl){
	    hitControl.fadeOut('fast');
	    hitControl.fadeIn('fast');
	    graveBajo.play();
		};

	var playAgudoAlto = function(hitControl){
	    hitControl.fadeOut('fast');
	    hitControl.fadeIn('fast');
	    agudoAlto.play();
		};

	var playAgudoBajo = function(hitControl){
	    hitControl.fadeOut('fast');
	    hitControl.fadeIn('fast');
	    agudoBajo.play();
		};

});
