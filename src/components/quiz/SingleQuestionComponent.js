const SingleQuestionComponent = ({ element, click }) => {
  let answers = [element.correct_answer, ...element.incorrect_answers];
  console.log(answers);
  //add boolean to answer
  answers = answers.map((answer, index) => {
    const isCorrect = index === 0 ? true : false;
    return { answer, isCorrect };
  });
  const buttons = answers.map((el, i) => (
    <button
      key={i}
      className="answer"
      value={el.isCorrect}
      onClick={(e) => click(e)}
    >
      {el.answer} x
    </button>
  ));
  return (
    <div className="question">
      <p>{element.question}</p>

      {buttons}
    </div>
  );
};

export default SingleQuestionComponent;
