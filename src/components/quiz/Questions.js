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
    // console.log(`curent index on update - ${index}`);
    if (list[index]) {
      loopHandler(index);
    }
    // return () => {
    //   clearInterval(questionInterval);
    // };
  }, [index]);
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
