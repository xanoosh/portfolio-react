const Score = ({ questionsNum, questionNum, scoreCount }) => {
  return (
    <div className="score">
      <p className="question-count">
        {questionNum}/{questionsNum}
      </p>
      <p className="score-count">{scoreCount}</p>
    </div>
  );
};

export default Score;
