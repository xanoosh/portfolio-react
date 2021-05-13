import { useState } from 'react';
import { useEffect } from 'react';
//quiz data for select values:
import DataQuiz from './DataQuiz.js';

//components:
import Select from './Select';
import Questions from './Questions';
//destructure data:
const { CATEGORIES, DIFFICULTY, NUMBEROFQUESTIONS, TESTRESPONSEDATA } =
  DataQuiz;

const Quiz = () => {
  const [categoriesValue, setCategoriesValue] = useState(CATEGORIES[0].value);
  const [difficultyValue, setDifficultyValue] = useState(DIFFICULTY[0].value);
  const [numberOfQuestionsValue, setNumberOfQuestionsValue] = useState(
    NUMBEROFQUESTIONS[0].value
  );
  const [questionList, setQuestionList] = useState([]);
  const [loop, setLoop] = useState(false);
  const [quizEnd, setQuizEnd] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  // const [questionTimeout, setQuestionTimeout] = useState(null);

  //value for tiemout:
  let questionTimeout = null;
  useEffect(() => {
    timeoutReset();
  }, [questionIndex, loop, quizEnd]);

  const timeoutReset = () => {
    // setQuestionTimeout((prev) => {
    questionTimeout = null;
    // });
    if (loop && questionIndex < TESTRESPONSEDATA.length - 1) {
      // find method to clear timeout on each funcion call
      // removeTimeout(prev);
      questionTimeout = setTimeout(() => {
        console.log(TESTRESPONSEDATA.length);
        setQuestionIndex((prev) => prev + 1);
      }, 3000);
    }
    if (loop && questionIndex === TESTRESPONSEDATA.length - 1) {
      setLoop(!loop);
      setQuizEnd(!quizEnd);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'categories') {
      setCategoriesValue(e.target.value);
    }
    if (e.target.name === 'difficulty') {
      setDifficultyValue(e.target.value);
    }
    if (e.target.name === 'number of questions') {
      setNumberOfQuestionsValue(e.target.value);
    }
  };

  const handleAnswer = (e) => {
    console.log(e.target);
    if (e.target.value === 'true') console.log('correct!');
    if (e.target.value === 'false') console.log('incorrect!');
  };
  const handleNext = () => {
    timeoutReset();
    setQuestionIndex((prev) => {
      return prev + 1;
    });
  };

  const fetchData = () => {
    const url = `https://opentdb.com/api.php?${numberOfQuestionsValue}${categoriesValue}${difficultyValue}&type=multiple`;
    console.log(url);
    // const request = async () => {
    //   const response = await fetch(url);
    //   const questionsData = await response.json();
    //   setQuestionList(questionsData.results);
    //   console.log(questionsData.results);
    //   setLoop(true);
    // };
    // request();
    (() => {
      const result = TESTRESPONSEDATA;
      setQuestionList(result);
      console.log(result);
      setLoop(!loop);
    })();
  };
  return (
    <div className="quiz">
      {!loop && !quizEnd && (
        <>
          <Select
            title="categories"
            valuesArr={CATEGORIES}
            onChange={handleChange}
            value={categoriesValue}
          />
          <Select
            title="difficulty"
            valuesArr={DIFFICULTY}
            onChange={handleChange}
            value={difficultyValue}
          />
          <Select
            title="number of questions"
            valuesArr={NUMBEROFQUESTIONS}
            onChange={handleChange}
            value={numberOfQuestionsValue}
          />
          <button className="btn-fixed-bottom" onClick={fetchData}>
            Start
          </button>
        </>
      )}
      {loop && (
        <Questions
          list={questionList}
          answerHandler={handleAnswer}
          nextHandler={handleNext}
          index={questionIndex}
        />
      )}
      {!loop && quizEnd && (
        <div>
          <h1>END</h1>
          <button className="btn-fixed-bottom" onClick={fetchData}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
