'use strict';

angular.module('checkers.view1', ['ngRoute'])
     .config(['$routeProvider', function ($routeProvider) {
               $routeProvider.when('/view1', {
                    templateUrl: 'view1/view1.html',
                    controller: 'checkerCtrl'
               });
          }])
     .controller('checkerCtrl', ['$scope', 'piecesProvider', function ($scope, piecesProvider) {
               $scope.onDragComplete = function (data, evt) {
                    console.log("drag success, data:", data);
               };
               $scope.onDropComplete = function (data, evt) {
                    console.log("drop success, data:", data);
               };
          }]);