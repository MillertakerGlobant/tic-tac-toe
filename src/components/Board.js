import React, { useState, useEffect } from 'react';
import BoardItem from './BoardItem';
import sadBoy from '../assets/game-over.png';
import winnerBoy from '../assets/winner.png';
import { calculateGame } from '../utils/Helper';

const Board = () => {
  const [board, setBoard] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);
  const [turn, setTurn] = useState(0);
  const [gameOver, setGameOver] = useState([false, null]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
  })

  function clickItem(e) {
    var index = e.target.getAttribute('arrayindex');
    var currentBoard = JSON.parse(JSON.stringify(board));

    turn === 8 && setGameOver([true, null])
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

      {gameOver[0] &&  <div> <img className="gameOver" src={sadBoy} alt=""/> <h3>GAME OVER</h3> </div>  }
      {winner !== null && <div> <img className="gameOver" src={winnerBoy} alt=""/> <h3> { winner } player is the winner</h3> </div>  }
    </div>
  )
}

export default Board;