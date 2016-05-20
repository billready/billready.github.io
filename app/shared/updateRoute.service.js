(function() {
	'use strict';

	angular
		.module('qa.shared')
		.factory('UpdateRoute',UpdateRoute)

	UpdateRoute.$inject = ['$location'];

	function UpdateRoute($location){
    var o = {};
    o.update = update;
    function update(route){
      $location.path(route)
    }
    return o;
  }
})();