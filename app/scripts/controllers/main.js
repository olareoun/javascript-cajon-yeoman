'use strict';

angular.module('jsCajonYeomanApp')
  .controller('MainCtrl', function ($scope, song) {

	$scope.velocity = 200;

	$scope.playSong = function(){
		playSong();
	};

	$scope.deleteSong = function(){
		song.delete();
	};

	var playSong = function(){
		if (!song.ended()) {
	    var songInterval = setInterval(function(){
	        song.next()();
	        if (song.ended()){
						window.clearInterval(songInterval);
						song.restart();
	        }
				}, $scope.velocity);
		}
	};

});
