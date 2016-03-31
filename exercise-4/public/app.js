
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/home');
$stateProvider
// HOME STATES AND NESTED VIEWS ========================================
  .state('home', {
    url: '/home',
    templateUrl: 'jumbotron.html'
  })

// nested list with custom controller
  .state('home.list', {
    url: '/list',
    templateUrl: 'dog-list.html',
    controller: function($scope) {
      $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    }
  })

// nested list with just some random string data
  .state('home.paragraph', {
    url: '/paragraph',
    template: 'I could sure use a drink right now.'
  })
  .state('about', {
    url: '/about',
    views: {

      // the main template will be placed here (relatively named)
      '': {
        templateUrl: 'partial-about.html'
      },

      // the child views will be defined here (absolutely named)
      'columnOne@about': {
        template: 'Here is new text!'
      },

      // for column two, we'll define a separate controller
      'columnTwo@about': {
        templateUrl: 'table-data.html',
        controller: 'funnyNameController'
      },

       'columnThree@about': {
        template: 'Third column works!'
      }
    }

  });

}); // closes $routerApp.config()

// let's define the scotch controller that we call up in the about state
routerApp.controller('funnyNameController', function($scope) {

  $scope.message = 'test';

  $scope.scotches = [{
    name: 'Hilarious Harry',
    laughs: 50
  }, {
    name: 'Funny Fran',
    laughs: 10000
  }, {
    name: 'Giggling Greg',
    laughs: 20000
  }];

});
