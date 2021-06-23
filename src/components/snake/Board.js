const Board = ({ position }) => {
  const txt = position.map((i) => i);
  return <div>{txt}</div>;
};

export default Board;
