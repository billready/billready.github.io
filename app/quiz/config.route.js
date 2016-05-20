(function() {
  'use strict';

  angular
    .module('qa.quiz')
    .config(quizRoute);
    
    quizRoute.$inject = ['$routeProvider'];

    function quizRoute($routeProvider) {
      $routeProvider.
        when('/quiz', {
          templateUrl: 'app/quiz/quiz.html',
          controller: 'Quiz',
          controllerAs: 'vm'
        })
    }

})();