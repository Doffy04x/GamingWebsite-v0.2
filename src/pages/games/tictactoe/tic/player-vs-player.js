import React, { useState } from 'react';
import './pvp.css';

const TicTacToe = () => {
  const initialCases = Array(9).fill(null);
  const [cases, setCases] = useState(initialCases);
  const [role, setRole] = useState('👨🏻‍🦱');
  const [winner, setWinner] = useState(null);

  const handlePlaceSelection = (index) => {
    if (cases[index] || winner) {
      return;
    }

    const updatedCases = cases.slice();
    updatedCases[index] = role;
    setCases(updatedCases);

    if (calculateWinner(updatedCases)) {
      setWinner(role);
    } else if (updatedCases.every((square) => square !== null)) {
      setWinner('Tie');
    } else {
      setRole(role === '👨🏻‍🦱' ? '👨🏿' : '👨🏻‍🦱');
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const resetGame = () => {
    setCases(initialCases);
    setRole('👨🏻‍🦱');
    setWinner(null);
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handlePlaceSelection(index)}>
        {cases[index]}
      </button>
    );
  };

  return (
    <div className="tictactoe-container">
      <h2 className="game-title">Start!</h2>
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row">
            {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
      {winner && <p>{winner === 'Tie' ? 'It\'s a Tie!' : `human ${winner} wins!`}</p>}
      <button className="reset-button" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default TicTacToe;
