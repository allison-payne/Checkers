'use strict';
/**
 * Checkers Provider Module
 *  @memberOf Checkers
 */
angular.module('checkers.providers', [])
     .provider('piecesProvider', function piecesProvider() {
          return {
               $get: function () {
                    return {
                         getRedList: function () {
                              return _redList;
                         },
                         getBlackList: function () {
                              return _blackList;
                         }
                    };
               }
          };
          var _blackList = [
               {id: 'Black-0'},
               {id: 'Black-1'},
               {id: 'Black-2'},
               {id: 'Black-3'},
               {id: 'Black-4'},
               {id: 'Black-5'},
               {id: 'Black-6'},
               {id: 'Black-7'},
               {id: 'Black-8'},
               {id: 'Black-9'},
               {id: 'Black-10'},
               {id: 'Black-11'},
               {id: 'Black-12'},
               {id: 'Black-13'},
               {id: 'Black-14'},
               {id: 'Black-15'}
          ];
          var _redList = [
               {id: 'Red-0'},
               {id: 'Red-1'},
               {id: 'Red-2'},
               {id: 'Red-3'},
               {id: 'Red-4'},
               {id: 'Red-5'},
               {id: 'Red-6'},
               {id: 'Red-7'},
               {id: 'Red-8'},
               {id: 'Red-9'},
               {id: 'Red-10'},
               {id: 'Red-11'},
               {id: 'Red-12'},
               {id: 'Red-13'},
               {id: 'Red-14'},
               {id: 'Red-15'}
          ];
     });



