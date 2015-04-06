'use strict';

angular.module('checkers.view1', ['ngRoute'])
     .config(['$routeProvider', function ($routeProvider) {
               $routeProvider.when('/view1', {
                    templateUrl: 'view1/view1.html',
                    controller: 'checkerCtrl'
               });
          }])
     .controller('checkerCtrl', ['$scope', function ($scope) {

          }]);