import { useEffect } from 'react';

const SingleQuestionComponent = ({
  element,
  answerHandler,
  nextHandler,
  index,
}) => {
  // console.log(element);
  useEffect(() => {}, [element]);
  let answers = [element.correct_answer, ...element.incorrect_answers];
  console.log(answers);
  //add boolean to answer
  answers = answers.map((answer, index) => {
    const isCorrect = index === 0 ? true : false;
    return { answer, isCorrect };
  });
  const shuffleArray = (array) => {
    let m = array.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    // console.log(array);
    return array;
  };
  const buttons = shuffleArray(answers).map((el, i) => (
    <button
      key={i}
      className="answer"
      value={el.isCorrect}
      onClick={(e) => answerHandler(e)}
    >
      {el.answer} x
    </button>
  ));
  return (
    <div className="question">
      <p>{index + 1}.</p>
      <p>{element.question}</p>

      {buttons}
      <button className="btn-fixed-bottom" onClick={nextHandler}>
        NEXT
      </button>
    </div>
  );
};

export default SingleQuestionComponent;
