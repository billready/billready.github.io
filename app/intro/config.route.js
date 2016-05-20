(function() {
  'use strict';

  angular
    .module('qa.intro')
    .config(introRoute);
    
    introRoute.$inject = ['$routeProvider'];

    function introRoute($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'app/intro/intro.html',
          controller: 'Intro',
          controllerAs: 'vm'
        })
    }

})();