import React, { useState, useEffect } from 'react';
import BoardItem from './BoardItem';

const Board = () => {
  const [board, setBoard] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);

  function clickItem(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="gameWrapper">
      Game Board 

      <ul className="BoardWrapper">
        <BoardItem index={0} onClick={clickItem} />
        <BoardItem index={1} onClick={clickItem} />
        <BoardItem index={2} onClick={clickItem} />
        <BoardItem index={3} onClick={clickItem} />
        <BoardItem index={4} onClick={clickItem} />
        <BoardItem index={5} onClick={clickItem} />
        <BoardItem index={6} onClick={clickItem} />
        <BoardItem index={7} onClick={clickItem} />
        <BoardItem index={8} onClick={clickItem} />
      </ul>
    </div>
  )
}

export default Board;