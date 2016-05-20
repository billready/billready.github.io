(function() {
  'use strict';

  angular
    .module('qa.done')
    .config(doneRoute);
    
    doneRoute.$inject = ['$routeProvider'];

    function doneRoute($routeProvider) {
      $routeProvider.
        when('/done', {
          templateUrl: 'app/done/done.html',
          controller: 'Done',
          controllerAs: 'vm'
        })
    }

})();