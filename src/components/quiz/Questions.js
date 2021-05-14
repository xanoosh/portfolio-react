import SingleQuestionComponent from './SingleQuestionComponent';
import { useEffect } from 'react';
const Questions = ({
  list,
  answerHandler,
  nextHandler,
  index,
  loopHandler,
}) => {
  useEffect(() => {
    console.log('mount...');
    if (list[index]) {
      console.log('...and validated');
      loopHandler();
    }
    // return () => {
    //   clearInterval(questionInterval);
    // };
  }, [index, loopHandler, list]);
  return (
    <div className="section-questions">
      <SingleQuestionComponent
        element={list[index]}
        answerHandler={answerHandler}
        nextHandler={nextHandler}
        index={index}
      />
    </div>
  );
};

export default Questions;
