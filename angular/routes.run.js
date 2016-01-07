(function () {
	"use strict";

	angular.module('app.routes').run(function ($rootScope, $state) {
		$rootScope.$state = $state;
	});

})();
