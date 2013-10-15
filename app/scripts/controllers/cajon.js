/*global $:false */

'use strict';

angular.module('jsCajonYeomanApp')
 
    .directive('cajon', function(){
      return {
        restrict: 'E',
        scope: false,
        controller: 'CajonCtrl',
        templateUrl: 'views/cajon.html'
      };
    })
    
	.controller('CajonCtrl', function($scope, sounds){

	    $scope.agudoIzqFuerte = function(){
				playAndRecord(sounds.agudoAlto, $(this));
			};

	    $scope.agudoIzqFlojo = function(){
				playAndRecord(sounds.agudoBajo, $(this));
			};

	    $scope.agudoDerFuerte = function(){
				playAndRecord(sounds.agudoAlto, $(this));
			};

	    $scope.agudoDerFlojo = function(){
				playAndRecord(sounds.agudoBajo, $(this));
			};

	    $scope.graveIzqFuerte = function(){
				playAndRecord(sounds.graveAlto, $(this));
			};

	    $scope.graveIzqFlojo = function(){
				playAndRecord(sounds.graveBajo, $(this));
			};

	    $scope.graveDerFuerte = function(){
				playAndRecord(sounds.graveAlto, $(this));
			};

	    $scope.graveDerFlojo = function(){
				playAndRecord(sounds.graveBajo, $(this));
			};

			var playAndRecord = function(sound, hitControl){
				playAndAnimate(sound, hitControl);
				// $scope.addToSong(function(){
				// 	playAndAnimate(sound, hitControl);
				// });
			};

			var playAndAnimate = function(sound, hitControl){
				// hitControl.fadeOut('fast');
				// hitControl.fadeIn('fast');
				sound();
			};

		});
