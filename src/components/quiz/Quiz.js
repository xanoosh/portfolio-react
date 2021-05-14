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
  let questionInterval = null;

  /* 
  change useeffect on update only
  to setinterval
  (make function resetting interval)
  remove interval on unmount !!!
  */

  const intervalReset = () => {
    clearInterval(questionInterval);

    if (!quizEnd) {
      if (loop && questionIndex < TESTRESPONSEDATA.length) {
        questionInterval = setInterval(() => {
          console.log(`${questionIndex} - question index`);
          setQuestionIndex(questionIndex + 1);
        }, 3000);
      }
      if (questionIndex === TESTRESPONSEDATA.length) {
        console.log('Quizend');
      }
      // if (loop && questionIndex < TESTRESPONSEDATA.length) {
      //   questionInterval = setInterval(() => {
      //     console.log(`${questionIndex} - still on`);
      //     setQuestionIndex(questionIndex + 1);
      //   }, 3000);
      // }
      // if (questionIndex === TESTRESPONSEDATA.length) {
      //   clearInterval(questionInterval);
      //   // console.log(`${questionIndex} - `);
      //   console.log('clear finally');
      //   setLoop(false);
      //   setQuizEnd(true);
      // }
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
    console.log(e.props.value);
    if (e.target.value === 'true') console.log('correct!');
    if (e.target.value === 'false') console.log('incorrect!');
  };
  const handleNext = () => {
    setQuestionIndex((prev) => {
      return prev + 1;
    });
    console.log('next');
    intervalReset();
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
      {loop && !quizEnd && (
        <Questions
          loopHandler={intervalReset}
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
