import React, { useState, useEffect } from 'react';
import BoardItem from './BoardItem';

const Board = () => {
  const [board, setBoard] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);

  useEffect(() => {
    console.log('on changed')
  })

  function clickItem(e) {
    var index = e.target.getAttribute('arrayindex');
    var currentBoard = JSON.parse(JSON.stringify(board));

    currentBoard[index] = index % 2;

    setBoard(currentBoard); 
    console.log(board);
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