'use strict';
/**
 * Checkers Provider Module
 *  @memberOf Checkers
 */
angular.module('checkers.board.providers', [])
     .provider('squaresProvider', function squaresProvider() {
          return {
               $get: function () {
                    return {
                         all: function () {
                              return _squares;
                         },
                         single: function (id) {
                              return _squares.filter(function (square) {
                                   return square.id = id;
                              })[0];
                         }
                    };
               }
          };
          var _squares = [
               [{currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}],
               [{currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}],
               [{currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}],
               [{currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}],
               [{currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}],
               [{currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}],
               [{currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}],
               [{currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}, {currentPiece: null, id: ''}]
          ];
     });