import '../../scss/snake.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import Board from './Board';
const Snake = () => {
  const [snakePosition, setSnakePosition] = useState([
    'snake ',
    'is ',
    'cool ',
  ]);
  const handleClick = () => {
    setSnakePosition((prev) => [...prev, 'ichuj ']);
  };
  return (
    <div className="snake-container">
      <h1>Snake main</h1>
      <button onClick={handleClick}>add 'ichuj'</button>
      <Board position={snakePosition} />
    </div>
  );
};

export default Snake;
