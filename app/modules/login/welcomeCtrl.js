(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:WelcomeCtrl
	* @description
	*/

	angular
		.module('pocui')
		.controller('WelcomeCtrl', Welcome);

		Welcome.$inject = ['$state','$stateParams'];


	function Welcome($state,$stateParams) {
	var wc = this;
	var usr = "test";
	wc.usr= $stateParams.user;
	console.log($stateParams)
		
		
	}
	
	

})();
