/**
 * @fileOverview text
 *  * * Created on : Apr 5, 2015, 6:38:07 PM
 * @author Allison
 */
'use strict';

angular.module('checkers.square.directives', [])

     .directive('checkerSquare', function () {
          return {
               restrict: 'E',
               transclude: true,
               scope: {},
               controller: 'squareCtrl',
               templateUrl: 'template.html'
          };
     });