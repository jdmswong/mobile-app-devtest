angular.module('convosLive')

.controller('RoomCtrl', function(room, $scope) {

		$scope.pageTitle = room.name;

})

;