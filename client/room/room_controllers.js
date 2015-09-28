angular.module('devTest')

.controller('RoomCtrl', function(room, $scope) {

		$scope.pageTitle = room.name;

})

;