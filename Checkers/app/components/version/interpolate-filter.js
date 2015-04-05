'use strict';

angular.module('checkers.version.interpolate-filter', [])

     .filter('interpolate', ['version', function (version) {
               return function (text) {
                    return String(text).replace(/\%VERSION\%/mg, version);
               };
          }]);
