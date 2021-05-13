import SingleQuestionComponent from './SingleQuestionComponent';

const Questions = ({ list, answerHandler, nextHandler, index }) => {
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
