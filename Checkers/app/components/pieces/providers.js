'use strict';
/**
 * Checkers Provider Module
 *  @memberOf Checkers
 */
angular.module('checkers.pieces.providers', [])
     .provider('piecesProvider', function piecesProvider() {
          return {
               $get: function () {
                    return {
                         Red: {
                              getAll: function () {
                                   return _redList;
                              },
                              setLocation: function (id, location) {
                                   _redList.filter(function (piece) {
                                        return piece.id = id;
                                   })[0].location = location;
                              },
                              getPiece: function (id) {
                                   return _redList.filter(function (piece) {
                                        return piece.id = id;
                                   })[0]
                              }
                         },
                         Black: {
                              getAll: function () {
                                   return _blackList;
                              },
                              setLocation: function (id, location) {
                                   _blackList.filter(function (piece) {
                                        return piece.id = id;
                                   })[0].location = location;
                              },
                              getPiece: function (id) {
                                   return _blackList.filter(function (piece) {
                                        return piece.id = id;
                                   })[0]
                              }
                         }
                    };
               }
          };
          var _blackList = [
               {location: '', id: 'B0'},
               {location: '', id: 'B1'},
               {location: '', id: 'B2'},
               {location: '', id: 'B3'},
               {location: '', id: 'B4'},
               {location: '', id: 'B5'},
               {location: '', id: 'B6'},
               {location: '', id: 'B7'},
               {location: '', id: 'B8'},
               {location: '', id: 'B9'},
               {location: '', id: 'B10'},
               {location: '', id: 'B11'},
               {location: '', id: 'B12'},
               {location: '', id: 'B13'},
               {location: '', id: 'B14'},
               {location: '', id: 'B15'}
          ];
          var _redList = [
               {location: '', id: 'R0'},
               {location: '', id: 'R1'},
               {location: '', id: 'R2'},
               {location: '', id: 'R3'},
               {location: '', id: 'R4'},
               {location: '', id: 'R5'},
               {location: '', id: 'R6'},
               {location: '', id: 'R7'},
               {location: '', id: 'R8'},
               {location: '', id: 'R9'},
               {location: '', id: 'R10'},
               {location: '', id: 'R11'},
               {location: '', id: 'R12'},
               {location: '', id: 'R13'},
               {location: '', id: 'R14'},
               {location: '', id: 'R15'}
          ];
     });



