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
				playAndRecord(sounds.agudoAlto);
			};

	    $scope.agudoIzqFlojo = function(){
				playAndRecord(sounds.agudoBajo);
			};

	    $scope.agudoDerFuerte = function(){
				playAndRecord(sounds.agudoAlto);
			};

	    $scope.agudoDerFlojo = function(){
				playAndRecord(sounds.agudoBajo);
			};

	    $scope.graveIzqFuerte = function(){
				playAndRecord(sounds.graveAlto);
			};

	    $scope.graveIzqFlojo = function(){
				playAndRecord(sounds.graveBajo);
			};

	    $scope.graveDerFuerte = function(){
				playAndRecord(sounds.graveAlto);
			};

	    $scope.graveDerFlojo = function(){
				playAndRecord(sounds.graveBajo);
			};

			var playAndRecord = function(sound){
				playAndAnimate(sound);
			};

			var playAndAnimate = function(sound){
				sound();
			};

		});
