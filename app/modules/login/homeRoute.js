'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('pocui')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('login', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/login/home.html'
			})
			.state('login.login', {
				url:'/login',
				templateUrl: 'app/modules/login/login.html',
				controller: 'LoginCtrl',
				controllerAs: 'vm'
			})
			.state('login.welcome', {
				url:'/welcome',
				templateUrl: 'app/modules/login/welcome.html',
				controller: 'WelcomeCtrl',
				controllerAs: 'wc',
				params:{'user':null,'device':null}
			});
			
	}]);
