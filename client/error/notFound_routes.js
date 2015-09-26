angular.module('convosLive')

	.config(function ($stateProvider) {

		$stateProvider

			.state('menu.notFound', {
				url: '/notFound',
				views: {
					"menu": {
						templateUrl: 'client/error/notFound.ng.html'
					}
				}
			})

		;
	})

;