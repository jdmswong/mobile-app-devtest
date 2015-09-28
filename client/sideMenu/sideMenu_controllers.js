angular.module('devTest')

.controller("MenuCtrl", function($scope, $state, $rootScope, $meteor){

    $scope.$on('$ionicView.enter', function(e) {
      if($rootScope.currentUser)
        $scope.me = $rootScope.currentUser;
      else
        $scope.logout();

    });

    $scope.logout = function(){
      $meteor.logout().then(function(){
        $state.go("login");
      }, function(error){
        // On failure
        console.log("Error: "+error);
      });
    };


  })

;