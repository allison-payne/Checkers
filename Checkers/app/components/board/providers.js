'use strict';
/**
 * Checkers Provider Module
 *  @memberOf Checkers
 */
angular.module('checkers.board.providers', [])
     .provider('squaresProvider', function squaresProvider() {
          var _squares = [
               [{class: 'white_square', currentPiece: null, id: 'KR8'}, {class: 'black_square', currentPiece: null, id: 'KN8'}, {class: 'white_square', currentPiece: null, id: 'KB8'}, {class: 'black_square', currentPiece: null, id: 'K8'}, {class: 'white_square', currentPiece: null, id: 'Q8'}, {class: 'black_square', currentPiece: null, id: 'QB8'}, {class: 'white_square', currentPiece: null, id: 'QN8'}, {class: 'black_square', currentPiece: null, id: 'QR8'}],
               [{class: 'black_square', currentPiece: null, id: 'KR7'}, {class: 'white_square', currentPiece: null, id: 'KN7'}, {class: 'black_square', currentPiece: null, id: 'KB7'}, {class: 'white_square', currentPiece: null, id: 'K7'}, {class: 'black_square', currentPiece: null, id: 'Q7'}, {class: 'white_square', currentPiece: null, id: 'QB7'}, {class: 'black_square', currentPiece: null, id: 'QN7'}, {class: 'white_square', currentPiece: null, id: 'QR7'}],
               [{class: 'white_square', currentPiece: null, id: 'KR6'}, {class: 'black_square', currentPiece: null, id: 'KN6'}, {class: 'white_square', currentPiece: null, id: 'KB6'}, {class: 'black_square', currentPiece: null, id: 'K6'}, {class: 'white_square', currentPiece: null, id: 'Q6'}, {class: 'black_square', currentPiece: null, id: 'QB6'}, {class: 'white_square', currentPiece: null, id: 'QN6'}, {class: 'black_square', currentPiece: null, id: 'QR6'}],
               [{class: 'black_square', currentPiece: null, id: 'KR5'}, {class: 'white_square', currentPiece: null, id: 'KN5'}, {class: 'black_square', currentPiece: null, id: 'KB5'}, {class: 'white_square', currentPiece: null, id: 'K5'}, {class: 'black_square', currentPiece: null, id: 'Q5'}, {class: 'white_square', currentPiece: null, id: 'QB5'}, {class: 'black_square', currentPiece: null, id: 'QN5'}, {class: 'white_square', currentPiece: null, id: 'QR5'}],
               [{class: 'white_square', currentPiece: null, id: 'KR4'}, {class: 'black_square', currentPiece: null, id: 'KN4'}, {class: 'white_square', currentPiece: null, id: 'KB4'}, {class: 'black_square', currentPiece: null, id: 'K4'}, {class: 'white_square', currentPiece: null, id: 'Q4'}, {class: 'black_square', currentPiece: null, id: 'QB4'}, {class: 'white_square', currentPiece: null, id: 'QN4'}, {class: 'black_square', currentPiece: null, id: 'QR4'}],
               [{class: 'black_square', currentPiece: null, id: 'KR3'}, {class: 'white_square', currentPiece: null, id: 'KN3'}, {class: 'black_square', currentPiece: null, id: 'KB3'}, {class: 'white_square', currentPiece: null, id: 'K3'}, {class: 'black_square', currentPiece: null, id: 'Q3'}, {class: 'white_square', currentPiece: null, id: 'QB3'}, {class: 'black_square', currentPiece: null, id: 'QN3'}, {class: 'white_square', currentPiece: null, id: 'QR3'}],
               [{class: 'white_square', currentPiece: null, id: 'KR2'}, {class: 'black_square', currentPiece: null, id: 'KN2'}, {class: 'white_square', currentPiece: null, id: 'KB2'}, {class: 'black_square', currentPiece: null, id: 'K2'}, {class: 'white_square', currentPiece: null, id: 'Q2'}, {class: 'black_square', currentPiece: null, id: 'QB2'}, {class: 'white_square', currentPiece: null, id: 'QN2'}, {class: 'black_square', currentPiece: null, id: 'QR2'}],
               [{class: 'black_square', currentPiece: null, id: 'KR1'}, {class: 'white_square', currentPiece: null, id: 'KN1'}, {class: 'black_square', currentPiece: null, id: 'KB1'}, {class: 'white_square', currentPiece: null, id: 'K1'}, {class: 'black_square', currentPiece: null, id: 'Q1'}, {class: 'white_square', currentPiece: null, id: 'QB1'}, {class: 'black_square', currentPiece: null, id: 'QN1'}, {class: 'white_square', currentPiece: null, id: 'QR1'}]
          ];
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
     });
