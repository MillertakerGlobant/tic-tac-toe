import React, { useState, useEffect } from 'react';
import BoardItem from './BoardItem';

const Board = () => {
  const [board, setBoard] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);

  useEffect(() => {
    console.log('changed');
  })

  const clickItem = (e) => {
    e.preventDefault();
    console.log('clicked');
  }

  return (
    <div className="gameWrapper">
      Game Board 

      <ul className="BoardWrapper">
        { board.map( (e,i) => <BoardItem key={`boardItem${i}`} index={i} value={e} onClick={clickItem} /> ) }
      </ul>
    </div>
  )
}

export default Board;