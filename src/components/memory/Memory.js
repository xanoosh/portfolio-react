import '../../scss/memory.scss';
import Board from './Board';
const Memory = () => {
  return (
    <div className="memory-container">
      <h1>Memory main</h1>
      <Board data="board component" />
    </div>
  );
};

export default Memory;
