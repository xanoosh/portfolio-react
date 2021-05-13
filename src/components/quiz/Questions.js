import SingleQuestionComponent from './SingleQuestionComponent';

const Questions = ({ list, click, index }) => {
  return (
    <div className="section-questions">
      <SingleQuestionComponent element={list[index]} click={click} />
    </div>
  );
};

export default Questions;
