(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:LoginCtrl
	* @description
	*
	*/

	angular
		.module('pocui')
		.controller('LoginCtrl', Login);

		Login.$inject = [ '$state','$stateParams','$http'];

	

	function Login($state,$stateParams,$http) {
		var vm =this;
		vm.signIn = signIn;

		/* testing the JSinterface*/
		/*awindow.MyJSInterface.ShowToast();
		lert(window.injectedObject.ShowDevice())*/
		//var device = window.injectedObject.ShowDevice()
		//console.log(device)
		//alert(device); 
		function signIn(usr,pwd){		
				$http.get('http://dummy.restapiexample.com/api/v1/employees').then(function(rsp){
					if(rsp.data.length >0){
						$state.go('login.welcome',{'user':usr,'device':"this Device"});
					}
				});
		}
}
	

})();
