// angular.module('RoutingApp', ['ngRoute'])
//   .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
//     $routeProvider
//       .when('/first', {
//         templateUrl: 'first.html'
//       })
//       .when('/second', {
//         templateUrl: 'second.html'
//       })
//       .otherwise({
//         templateUrl: 'initial.html'
//       });
//       $locationProvider.html5Mode({
//         enabled: true,
//         requireBase: false
//       });
//   }]);


angular.module("RoutingApp", ["ngRoute"])
	.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
		$routeProvider
			.when('/first', {
				templateUrl: "first.html"
			})
			.when('/second',{
				templateUrl: "second.html"
			})
			.otherwise({
				templateUrl: "initial.html"
			});
		$locationProvider.html5Mode(true);
      enabled: true,
      requireBase: false
        });
  	}]);
