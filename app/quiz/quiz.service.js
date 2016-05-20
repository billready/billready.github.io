(function() {
	'use strict';

	angular
		.module('qa.quiz')
		.factory('GetX', GetX)

		GetX.$inject = ['$http'];

		function GetX($http){
			var o = {

			}
			o.questions = questions;

			function questions(){
				return $http({
			        method: 'GET',
			        url: 'app/quiz/data.json'
			    }) 
			}
			return o;
		}
})();