angular.module('devTest')

.config(function($stateProvider) {

  $stateProvider

	.state('login',{
		url: '/',
		templateUrl: 'client/login/login.ng.html',
		controller: 'LoginCtrl'
	})
	
  ;
})

;