/**
 * @fileOverview text
 *  * * Created on : Apr 5, 2015, 7:06:47 PM
 * @author Allison
 */
'use strict';
angular.module('checkers.board.controllers', [])
     .controller('boardCtrl', ['$scope', 'squaresProvider', function ($scope, squaresProvider) {
               $scope.boardPlaces = squaresProvider.all();
          }])
     .controller('rowCtrl', ['$scope', function ($scope) {
               $scope.row;
          }])
     .controller('squareCtrl', ['$scope', function ($scope) {
               $scope.onDragComplete = function (data, evt) {
                    console.log("drag success, data:", data);
               };
               $scope.onDropComplete = function (data, evt) {
                    console.log("drop success, data:", data);
               };
          }]);