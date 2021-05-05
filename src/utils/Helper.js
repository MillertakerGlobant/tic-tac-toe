const calculateGame = (board) => {
  var winnerLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (board[a] !== -1 && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return null;
}


export {
  calculateGame
}

