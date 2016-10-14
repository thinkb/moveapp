// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
  $routeProvider

    .when('/home', {
      templateUrl : 'templates/ma_desafio1.html',
      controller  : 'mainController'
    })
    // route for the about page
    .when('/desafios', {
      templateUrl : 'templates/amigos.html',
      controller  : 'aboutController'
    })

    // route for the contact page
    .when('/amigos', {
      templateUrl : 'templates/contact.html',
      controller  : 'contactController'
    })
    // route for the home page
    .otherwise({
      templateUrl : 'templates/ma_desafio1.html',
      controller  : 'mainController'
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope, $rootScope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
  $scope.lista = [{ nome: "bruna" },{ nome: "bruna" },{ nome: "bruna" },{ nome: "bruna" }];

});

scotchApp.controller('aboutController', function($scope) {
  $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});
