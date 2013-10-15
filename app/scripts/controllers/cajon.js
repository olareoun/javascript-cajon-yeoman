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

			};

	    $scope.agudoIzqFlojo = function(){

			};

	    $scope.agudoDerFuerte = function(){

			};

	    $scope.agudoDerFlojo = function(){

			};

	    $scope.graveIzqFuerte = function(){

			};

	    $scope.graveIzqFlojo = function(){

			};

	    $scope.graveDerFuerte = function(){

			};

	    $scope.graveDerFlojo = function(){

			};

			$('.grave-a').click(function(){
				playAndRecord(sounds.graveAlto, $(this));
			});
			$('.grave-b').click(function(){
				playAndRecord(sounds.graveBajo, $(this));
			});
			$('.agudo-a').click(function(){
				playAndRecord(sounds.agudoAlto, $(this));
			});
			$('.agudo-b').click(function(){
				playAndRecord(sounds.agudoBajo, $(this));
			});

			var playAndRecord = function(sound, hitControl){
				playAndAnimate(sound, hitControl);
				$scope.addToSong(function(){
					playAndAnimate(sound, hitControl);
				});
			};

			var playAndAnimate = function(sound, hitControl){
				hitControl.fadeOut('fast');
				hitControl.fadeIn('fast');
				sound.play();
			};

		});
