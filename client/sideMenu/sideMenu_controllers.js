angular.module('convosLive')

.controller("MenuCtrl", function($scope, $state, $rootScope, $meteor){

    $scope.$on('$ionicView.enter', function(e) {
      // I need a way to reactively track the current user.  The
      // resolved currentUser doesn't change on logging out and back
      // in as someone else.  Current solution degrades performance
      // TODO: find a proper solution
      // Tracker.autorun() with Meteor.user() perhaps
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