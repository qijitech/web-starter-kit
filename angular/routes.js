(function () {
	"use strict";

	angular.module('app.routes').config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

		var getView = function (viewName) {
			return './views/app/' + viewName + '/' + viewName + '.html';
		};

		// Configure Idle settings
		IdleProvider.idle(5); // in seconds
		IdleProvider.timeout(120); // in seconds

		$urlRouterProvider.otherwise("/login");

		$ocLazyLoadProvider.config({
			// Set to true if you want to see what and when is dynamically loaded
			debug: false
		});

		$stateProvider
			.state('login', {
				url: "/login",
				templateUrl: getView('login'),
				data: {pageTitle: 'Login', specialClass: 'gray-bg'}
			});

	});
})();
