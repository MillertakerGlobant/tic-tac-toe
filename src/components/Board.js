import React, { useState, useEffect } from 'react';
import BoardItem from './BoardItem';

const Board = () => {
  const [board, setBoard] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);

  function clickItem(e) {
    e.preventDefault();
    var value = e.target.getAttribute('value');
    var index = e.target.getAttribute('arrayindex');
    console.log('clicked', value, index );
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