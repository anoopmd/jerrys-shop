'use strict';

angular.module('app', [
    'ngRoute',
    'ui.bootstrap',
    'app.products'
  ])

  .config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when('/films', {
          templateUrl : 'products/films.html',
          controller : 'FilmController'
      }).
      when('/albums', {
          templateUrl : 'products/albums.html',
          controller : 'AlbumsController'
      }).
      otherwise({
          redirectTo : '/films'
      });
  }]);