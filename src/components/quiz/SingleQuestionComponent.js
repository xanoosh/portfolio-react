const SingleQuestionComponent = ({ element, click }) => {
  const answers = [element.correct_answer, ...element.incorrect_answers].map(
    (answer, i) => {
      <button
        className="answer"
        value={i === 0 ? true : false}
        onClick={() => click}
      >
        {answer}
      </button>;
    }
  );
  return (
    <div className="question">
      <p>{element.question}</p>
      {answers}
    </div>
  );
};

export default SingleQuestionComponent;
