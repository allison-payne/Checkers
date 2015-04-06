'use strict';

// Declare app level module which depends on views, and components
angular.module('checkers', [
     'ngRoute',
     'ngDraggable',
     'checkers.view1',
     'checkers.view2',
     'checkers.version',
     'checkers.board',
     'checkers.pieces'
]).
     config(['$routeProvider', function ($routeProvider) {
               $routeProvider.otherwise({redirectTo: '/view1'});
          }]);
