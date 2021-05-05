import React, { useState, useEffect } from 'react';
import BoardItem from './BoardItem';

const Board = () => {
  const [board, setBoard] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    console.log('on changed')
  })

  function clickItem(e) {
    var index = e.target.getAttribute('arrayindex');
    var currentBoard = JSON.parse(JSON.stringify(board));

    currentBoard[index] = turn % 2;
    setTurn(turn + 1);

    setBoard(currentBoard); 
  }

  const boardItems = board.map((e, i) => <BoardItem key={`boardItem${i}`} arrayindex={i} value={e} onClick={clickItem} ></BoardItem> )
  
  return (
    <div className="gameWrapper">
      Game Board 

      <ul className="BoardWrapper">
        { boardItems }
      </ul>
    </div>
  )
}

export default Board;