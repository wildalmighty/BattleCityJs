define([
	'jquery',
	'crafty',
	'components',
	'tanks',
	'map',
	'scenes'
], function($,Crafty,C, Tanks, Map,Scenes) {
	var start = function() {
		//Init
		Crafty.init(Map.width(), Map.height());
		Crafty.background(Map.bgcolor);
		console.log('bg color');
		Crafty.scene('Loading');
//		Crafty.scene('Game');
	};
	return {
		start: start
	};
});
