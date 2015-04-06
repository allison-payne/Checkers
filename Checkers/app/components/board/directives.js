/**
 * @fileOverview text
 *  * * Created on : Apr 5, 2015, 6:38:07 PM
 * @author Allison
 */
'use strict';

angular.module('checkers.board.directives', [])
     .directive('checkerBoard', function () {
          return {
               restrict: 'E',
               transclude: true,
               scope: {
               },
               controller: 'boardCtrl',
               link: function (scope, element, attrs) {

               },
               templateUrl: 'board.html'
          };
     })
     .directive('checkerRow', function () {
          return {
               require: '^checkerBoard',
               restrict: 'E',
               transclude: true,
               scope: {
                    row: '='
               },
               controller: 'rowCtrl',
               link: function (scope, element, attrs, boardCtrl) {

               },
               templateUrl: 'row.html'
          };
     })
     .directive('checkerSquare', function () {
          return {
               require: '^checkerRow',
               restrict: 'E',
               transclude: true,
               scope: {
                    id: '=',
                    currentPiece: '='
               },
               controller: 'squareCtrl',
               link: function (scope, element, attrs, rowCtrl) {

               },
               templateUrl: 'square.html'
          };
     });