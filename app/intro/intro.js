(function() {
	'use strict';

	angular
		.module('qa.intro')
		.controller('Intro', Intro)
	Intro.$inject = ['$scope', 'UpdateRoute'];
	
	function Intro($scope, UpdateRoute) {
		var vm = this;
		vm.go = go;


		function go(route) {
			UpdateRoute.update(route);
		}
	}
})();