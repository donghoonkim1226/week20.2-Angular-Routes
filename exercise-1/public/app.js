angular.module('RoutingApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/first', {
        templateUrl: 'first.html'
      })
      .when('/second', {
        templateUrl: 'second.html'
      })
      .otherwise({
        templateUrl: 'initial.html'
      });
  }]);
