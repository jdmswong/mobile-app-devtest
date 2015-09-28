angular.module('devTest')

.config(function($stateProvider) {

  $stateProvider

	.state('menu',{
		url: '/menu',
		abstract: true,
		templateUrl: 'client/sideMenu/sideMenu.ng.html',
		controller: 'MenuCtrl',
		resolve: {
			"currentUser": function($meteor){
        // Throws an "AUTH_REQUIRED" error if not logged in
        // caught by $rootScope.$on("$stateChangeError"
				return $meteor.requireUser();
			}
		}
	})
	
  ;
})

;