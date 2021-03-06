angular.module('devTest')

.controller('LoginCtrl', function($scope, $state, $meteor){

	var loginInAction = function(){
		$state.go("menu.room",{roomId: Rooms.findOne()._id});
	};

	$scope.loginData = {};
	
	$scope.$on('$ionicView.leave', function(e) {
		$scope.error = null;
		$scope.loginData = {};
  });
	
	$scope.login = function(){

		if( validate() != 0 )
			return 0;

		$meteor.loginWithPassword(
			$scope.loginData.username, 
			$scope.loginData.password).then(function()
		{
			// login success
			loginInAction();

		},function(error){
			// login failure
			$scope.error = error;
		});
		
	};

	var validate = function(){

		if(
			typeof($scope.loginData.username) == 'undefined' ||
			$scope.loginData.username.length == 0
		){
			$scope.error = new Meteor.Error('no-username', 'Username missing');
			return -1;
		}
		if(
			typeof($scope.loginData.password) == 'undefined' ||
			$scope.loginData.password.length == 0
		){
			return $scope.error = new Meteor.Error('no-password', 'Password missing');
		}
		return 0;
	};

	$scope.onKeyDown = function(event){
		// On enter
		if( event.which === 13 )
			$scope.login();
	};	
})

;