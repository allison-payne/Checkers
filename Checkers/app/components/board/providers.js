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
                         getAll: function () {
                              return _squares;
                         },
                         setLocation: function (id, location) {
                              _squares.filter(function (square) {
                                   return square.id = id;
                              })[0].location = location;
                         },
                         getSquare: function (id) {
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