/**
 * @fileOverview text
 *  * * Created on : Apr 9, 2015, 5:05:34 PM
 * @author Allison
 */
'use strict';
angular.module('checkers.pieces.directives', [])
     .directive('checkerPiece', function () {
          return {
               require: ['^checkerBoard', 'ngModel'],
               restrict: 'E',
               transclude: true,
               scope: {
                    row: '=',
                    square: '=ngModel',
                    ngDrag: '=',
                    onDragSuccess: '='
               },
               controller: 'pieceCtrl',
               link: function (scope, element, attrs, controllers) {

               },
               templateUrl: 'components/board/templates/square.html'
          };
     });