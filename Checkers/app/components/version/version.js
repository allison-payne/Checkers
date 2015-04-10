'use strict';

angular.module('checkers.version', [
     'checkers.version.interpolate-filter',
     'checkers.version.version-directive'
])
     .value('version', '0.1');
