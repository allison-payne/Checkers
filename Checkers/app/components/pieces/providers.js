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
               {class: 'black_piece', id: 'B0'},
               {class: 'black_piece', id: 'B1'},
               {class: 'black_piece', id: 'B2'},
               {class: 'black_piece', id: 'B3'},
               {class: 'black_piece', id: 'B4'},
               {class: 'black_piece', id: 'B5'},
               {class: 'black_piece', id: 'B6'},
               {class: 'black_piece', id: 'B7'},
               {class: 'black_piece', id: 'B8'},
               {class: 'black_piece', id: 'B9'},
               {class: 'black_piece', id: 'B10'},
               {class: 'black_piece', id: 'B11'},
               {class: 'black_piece', id: 'B12'},
               {class: 'black_piece', id: 'B13'},
               {class: 'black_piece', id: 'B14'},
               {class: 'black_piece', id: 'B15'}
          ];
          var _redList = [
               {class: 'red_piece', id: 'R0'},
               {class: 'red_piece', id: 'R1'},
               {class: 'red_piece', id: 'R2'},
               {class: 'red_piece', id: 'R3'},
               {class: 'red_piece', id: 'R4'},
               {class: 'red_piece', id: 'R5'},
               {class: 'red_piece', id: 'R6'},
               {class: 'red_piece', id: 'R7'},
               {class: 'red_piece', id: 'R8'},
               {class: 'red_piece', id: 'R9'},
               {class: 'red_piece', id: 'R10'},
               {class: 'red_piece', id: 'R11'},
               {class: 'red_piece', id: 'R12'},
               {class: 'red_piece', id: 'R13'},
               {class: 'red_piece', id: 'R14'},
               {class: 'red_piece', id: 'R15'}
          ];
     });



