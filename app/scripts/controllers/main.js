'use strict';

angular.module('jsCajonYeomanApp')
  .controller('MainCtrl', function ($scope) {

	var song = [];

	$scope.velocity = 200;

	$scope.addToSong = function(movement){
	    song.push(movement);
		};

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

});
