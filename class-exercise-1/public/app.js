angular.module('RoutingClassExercise1', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
      .when('/class1', {
        templateUrl: 'firstClass.html'
      })
      .when('/class2', {
        templateUrl: 'secondClass.html'
      })
      .when('/class3', {
        templateUrl: 'thirdClass.html'
      })
      .when('/class4', {
        templateUrl: 'fourthClass.html'
      })
      .when('/class5', {
        templateUrl: 'fifthClass.html'
      });
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }]);
