const Board = ({ position }) => {
  const positionTxt = position.map((i) => (
    <p>
      x: {i.x},<br />
      y:{i.y}
    </p>
  ));
  return <div>{positionTxt}</div>;
};

export default Board;
