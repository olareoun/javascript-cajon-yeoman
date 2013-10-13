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
	    playAndRecord(playGraveAlto);
		});
	$('.grave-b').click(function(){
	    playAndRecord(playGraveBajo);
		});
	$('.agudo-a').click(function(){
	    playAndRecord(playAgudoAlto);
		});
	$('.agudo-b').click(function(){
	    playAndRecord(playAgudoBajo);
		});

	var playAndRecord = function(sound){
	    sound();
	    song.push(sound);
		};

	$('.hit-control').click(function(){
	    $(this).fadeOut('fast');
	    $(this).fadeIn('fast');
		});

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

	$scope.changeVelocity = function(){
		$scope.velocity = $scope.newVelocity;
	};

	var playGraveAlto = function(){
	    graveAlto.play();
		};

	var playGraveBajo = function(){
	    graveBajo.play();
		};

	var playAgudoAlto = function(){
	    agudoAlto.play();
		};

	var playAgudoBajo = function(){
	    agudoBajo.play();
		};

});
