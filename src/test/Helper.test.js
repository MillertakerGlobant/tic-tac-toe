import { calculateGame } from '../utils/Helper';

test('board is empty', () => {
  var board = [-1,-1,-1,-1,-1,-1,-1,-1,-1]

  expect(calculateGame(board)).toBe(null);
});

test('user X win by row 0,1,2', () => {
  var board = [1,1,1,0,0,-1,-1,-1,-1]
  
  expect(calculateGame(board)).toBe(1);
});

test('user O win by row 0,1,2', () => {
  var board = [0,0,0,1,1,-1,-1,-1,-1]
  
  expect(calculateGame(board)).toBe(0);
});

test('user X win by row 2,5,8', () => {
  var board = [0,0,1,-1,-1,1,-1,-1,1]
  
  expect(calculateGame(board)).toBe(1);
});

test('user O win by row 2,5,8', () => {
  var board = [1,1,0,-1,-1,0,-1,-1,0]
  
  expect(calculateGame(board)).toBe(0);
});

