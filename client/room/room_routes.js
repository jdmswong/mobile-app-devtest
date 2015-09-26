angular.module('convosLive')

.config(function($stateProvider) {

  $stateProvider

	.state('menu.room', {
		url: '/room/:roomId',
		views: {
			'menu': {
				templateUrl: 'client/room/room.ng.html',
				controller: 'RoomCtrl',
				resolve:{
					"room": function($stateParams){
						var room = Rooms.findOne({_id: $stateParams.roomId});
						if( typeof(room) === 'undefined' ){
							throw 'not-found';
						}
						return room;
					}
				}
			}
		}
	})
	

  ;
})

;