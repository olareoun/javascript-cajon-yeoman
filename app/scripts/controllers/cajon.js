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
    
	.controller('CajonCtrl', function($scope, sounds, song){

		$scope.lines = [];

		var addPartitura = function(line){
			$scope.lines.push(line.split(' '));
		};

		$scope.agudoIzqFuerte = function(){
				playAndRecord(sounds.agudoAlto);
				addPartitura('x - - -');
			};

		$scope.agudoIzqFlojo = function(){
				playAndRecord(sounds.agudoBajo);
				addPartitura('o - - -');
			};

		$scope.agudoDerFuerte = function(){
				playAndRecord(sounds.agudoAlto);
				addPartitura('- - - x');
			};

		$scope.agudoDerFlojo = function(){
				playAndRecord(sounds.agudoBajo);
				addPartitura('- - - o');
			};

		$scope.graveIzqFuerte = function(){
				playAndRecord(sounds.graveAlto);
				addPartitura('- x - -');
			};

		$scope.graveIzqFlojo = function(){
				playAndRecord(sounds.graveBajo);
				addPartitura('- o - -');
			};

		$scope.graveDerFuerte = function(){
				playAndRecord(sounds.graveAlto);
				addPartitura('- - x -');
			};

		$scope.graveDerFlojo = function(){
				playAndRecord(sounds.graveBajo);
				addPartitura('- - o -');
			};

		var playAndRecord = function(sound){
			playAndAnimate(sound);
			song.record(sound);
		};

		var playAndAnimate = function(sound){
			sound();
		};

	});
