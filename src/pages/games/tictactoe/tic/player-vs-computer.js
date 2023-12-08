import React, { useState, useEffect } from 'react';

function Square({ value, onSquareClick, isWinningSquare }) {
  const className = "square" + (isWinningSquare ? " winning" : "");
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const initialSquares = Array(9).fill(null);
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(initialSquares);
  const [winner, setWinner] = useState(null);

  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? '👱‍♂️' : '🧛‍♂️';
    setSquares(nextSquares);

    const winnerInfo = calculateWinner(nextSquares);
    if (winnerInfo) {
      setWinner(winnerInfo);
    } else {
      setXIsNext(!xIsNext);
    }
  }

  const resetGame = () => {
    setSquares(initialSquares);
    setXIsNext(true);
    setWinner(null);
  };

  const status = winner
    ? `Winner: ${winner === '👱‍♂️' ? 'Human' : 'Vampire'}`
    : `Next player: ${xIsNext ? '👱‍♂️ Human' : '🧛‍♂️ Vampire'}`;

  useEffect(() => {
    if (!xIsNext && !winner) {
      const timeoutId = setTimeout(() => {
        const availableSquares = squares.map(
          (square, index) => (square === null ? index : null)
        ).filter((square) => square !== null);

        const robotMove = getRobotMove(squares, availableSquares, xIsNext);
        handleClick(robotMove);
      }, 1000); // Delay of 1 second
      return () => clearTimeout(timeoutId);
    }
  }, [xIsNext, squares, winner]);

  return (
    <div className="tictactoe-container">
      <h2 className="game-title">Start!</h2>
      <div className="board">
        <div className="board-row">
          {[0, 1, 2].map((col) => (
            <Square
              key={col}
              value={squares[col]}
              onSquareClick={() => handleClick(col)}
              isWinningSquare={winner && winner.includes(col)}
            />
          ))}
        </div>
        <div className="board-row">
          {[3, 4, 5].map((col) => (
            <Square
              key={col}
              value={squares[col]}
              onSquareClick={() => handleClick(col)}
              isWinningSquare={winner && winner.includes(col)}
            />
          ))}
        </div>
        <div className="board-row">
          {[6, 7, 8].map((col) => (
            <Square
              key={col}
              value={squares[col]}
              onSquareClick={() => handleClick(col)}
              isWinningSquare={winner && winner.includes(col)}
            />
          ))}
        </div>
      </div>
      <div className="status">{status}</div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function getRobotMove(squares, availableSquares, xIsNext) {
  for (let i = 0; i < availableSquares.length; i++) {
    const copySquares = squares.slice();
    copySquares[availableSquares[i]] = xIsNext ? '👱‍♂️' : '🧛‍♂️';
    if (calculateWinner(copySquares) === (xIsNext ? '👱‍♂️' : '🧛‍♂️')) {
      return availableSquares[i];
    }
  }

  for (let i = 0; i < availableSquares.length; i++) {
    const copySquares = squares.slice();
    copySquares[availableSquares[i]] = xIsNext ? '🧛‍♂️' : '👱‍♂️';
    if (calculateWinner(copySquares) === (xIsNext ? '🧛‍♂️' : '👱‍♂️')) {
      return availableSquares[i];
    }
  }

  return availableSquares[Math.floor(Math.random() * availableSquares.length)];
}
