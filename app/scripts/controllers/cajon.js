/*global $:false */
/*global buzz:false */

'use strict';

angular.module('jsCajonYeomanApp')
 
    .directive('cajon', function(){
      return {
        restrict: 'E',
        scope: false,
        controller: 'CajonCtrl',
        templateUrl: 'views/cajon.html'
      }
    })
    
	.controller('CajonCtrl', function($scope){

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
	    $scope.addToSong(function(){
				sound(hitControl);
			});
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
