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
               {location: '', id: '0'},
               {location: '', id: '1'},
               {location: '', id: '2'},
               {location: '', id: '3'},
               {location: '', id: '4'},
               {location: '', id: '5'},
               {location: '', id: '6'},
               {location: '', id: '7'},
               {location: '', id: '8'},
               {location: '', id: '9'},
               {location: '', id: '10'},
               {location: '', id: '11'},
               {location: '', id: '12'},
               {location: '', id: '13'},
               {location: '', id: '14'},
               {location: '', id: '15'}
          ];
          var _redList = [
               {location: '', id: '0'},
               {location: '', id: '1'},
               {location: '', id: '2'},
               {location: '', id: '3'},
               {location: '', id: '4'},
               {location: '', id: '5'},
               {location: '', id: '6'},
               {location: '', id: '7'},
               {location: '', id: '8'},
               {location: '', id: '9'},
               {location: '', id: '10'},
               {location: '', id: '11'},
               {location: '', id: '12'},
               {location: '', id: '13'},
               {location: '', id: '14'},
               {location: '', id: '15'}
          ];
     });



