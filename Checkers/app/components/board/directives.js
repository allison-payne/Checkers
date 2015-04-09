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
               //require: 'ngModel',
               transclude: true,
               scope: {
               },
               controller: 'boardCtrl',
               link: function (scope, element, attrs, controller) {
                    debugger;
               },
               templateUrl: 'components/board/templates/board.html'
          };
     })
     .directive('checkerRow', function () {
          return {
               require: ['^checkerBoard', 'ngModel'],
               restrict: 'E',
               transclude: true,
               scope: {
                    boardPlaces: '=',
                    row: '=ngModel'
               },
               controller: 'rowCtrl',
               link: function (scope, element, attrs, boardCtrl) {
                    debugger;
               },
               templateUrl: 'components/board/templates/row.html'
          };
     })
     .directive('checkerSquare', function () {
          return {
               require: ['^checkerRow', 'ngModel'],
               restrict: 'E',
               transclude: true,
               scope: {
                    row: '=',
                    square: '=ngModel',
                    ngDrop: '=',
                    onDropSuccess: '='
               },
               controller: 'squareCtrl',
               link: function (scope, element, attrs, controllers) {

               },
               templateUrl: 'components/board/templates/square.html'
          };
     });