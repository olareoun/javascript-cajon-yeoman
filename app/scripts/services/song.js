'use strict';

angular.module('jsCajonYeomanApp')

.factory('song', function(){

	var song = [];
	var pivote = 0;

	return {
		record: function(sound){
			song.push(sound);
		},
		empty: function(){
			return song.length === 0;
		},
		next: function(){
			pivote++;
			return song[pivote - 1];
		},
		ended: function(){
			return pivote >= song.length;
		},
		restart: function(){
			pivote = 0;
		},
		delete: function(){
			song.length = 0;
		}
	};

});