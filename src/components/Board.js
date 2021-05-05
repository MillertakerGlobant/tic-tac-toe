import React, { useState } from 'react';
import BoardItem from './BoardItem';
import sadBoy from '../assets/game-over.png';
import winnerBoy from '../assets/winner.png';
import { calculateGame } from '../utils/Helper';

const Board = () => {
  const [board, setBoard] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);
  const [turn, setTurn] = useState(0);
  const [gameOver, setGameOver] = useState([false, null]);
  const [winner, setWinner] = useState(null);
  const player = ['x','o'];
  const [prevBoard, setPrevBoard] = useState([]);

  function clickItem(e) {
    if(!gameOver[0] && winner === null) {
      var index = e.target.getAttribute('arrayindex');
      var currentBoard = JSON.parse(JSON.stringify(board));
      setPrevBoard(JSON.parse(JSON.stringify(board)));

      turn === 8 && setGameOver([true, null])
      currentBoard[index] = turn % 2;
      
      setTurn(turn + 1);
      setBoard(currentBoard); 
      setWinner(calculateGame(currentBoard))
    }
  }

  function resetGame(e) {
    e.preventDefault();
    setBoard([-1,-1,-1,-1,-1,-1,-1,-1,-1]);
    setTurn(0);
    setWinner(null);
    setGameOver([false, null])
    setPrevBoard([]);
  }

  function rewindGame(e) {
    e.preventDefault();

    if(!gameOver[0] && winner === null) {
      setBoard(prevBoard);
      setPrevBoard([]);
      setTurn(turn - 1);
    }
  }

  const boardItems = board.map((e, i) => <BoardItem key={`boardItem${i}`} arrayindex={i} value={e} onClick={clickItem} ></BoardItem> )
  
  return (
    <div className="gameWrapper">
      Game Board 

      <ul className="BoardWrapper">
        { boardItems }
      </ul>

      <a className="resetBtn" onClick={resetGame} href="">Reset Game</a>
      { winner === null && <p>Player {player[turn % 2]} plays</p>  }
      { prevBoard.length > 0 &&  <a className="rewindBtn" onClick={rewindGame} href="">Rewind Move</a> }

      {gameOver[0] && winner === null && <div> <img className="gameOver" src={sadBoy} alt=""/> <h3>GAME OVER</h3> </div>  }
      {winner !== null && <div> <img className="gameOver" src={winnerBoy} alt=""/> <h3> { player[winner] } player is the winner</h3> </div>  }
    </div>
  )
}

export default Board;