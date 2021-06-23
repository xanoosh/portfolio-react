import '../../scss/snake.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import Board from './Board';
const Snake = () => {
  const [snakePosition, setSnakePosition] = useState([
    { x: 15, y: 15 },
    { x: 15, y: 14 },
    { x: 15, y: 13 },
  ]);
  const handleClick = () => {
    setSnakePosition((prev) => [...prev, { x: 1, y: 1 }]);
  };
  return (
    <div className="snake-container">
      <h1>Snake main</h1>
      <button onClick={handleClick}>add segment</button>
      <Board position={snakePosition} />
    </div>
  );
};

export default Snake;
