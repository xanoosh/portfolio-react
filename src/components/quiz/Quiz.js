import { useState } from 'react';
import { useEffect } from 'react';
//quiz data for select values:
import Data from './Data.js';

//components:
import Select from './Select';
import Questions from './Questions';
//destructure data:
const { CATEGORIES, DIFFICULTY, NUMBEROFQUESTIONS, TESTRESPONSEDATA } = Data;

const Quiz = () => {
  const [categoriesValue, setCategoriesValue] = useState(CATEGORIES[0].value);
  const [difficultyValue, setDifficultyValue] = useState(DIFFICULTY[0].value);
  const [numberOfQuestionsValue, setNumberOfQuestionsValue] = useState(
    NUMBEROFQUESTIONS[0].value
  );
  const [questionList, setQuestionList] = useState([]);
  const [loop, setLoop] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    //logic for gameloop start/end
    if (loop) {
      setTimeout(() => {
        setQuestionIndex((prev) => prev + 1);
      }, 3000);
    }

    if (!loop) {
      //endgame i guess
      console.log('loopEnded');
    }
  }, [loop]);

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
    console.log(e.target.value);
  };

  const fetchData = () => {
    const url = `https://opentdb.com/api.php?${numberOfQuestionsValue}${categoriesValue}${difficultyValue}&type=multiple`;
    console.log(url);
    const request = async () => {
      const response = await fetch(url);
      const questionsData = await response.json();
      setQuestionList(questionsData.results);
      console.log(questionsData.results);
      setLoop(true);
    };
    request();
    // (() => {
    //   const result = TESTRESPONSEDATA;
    //   setQuestionList(result);
    //   console.log(result);
    //   setLoopStarted(!loopStarted);
    // })();
  };
  return (
    <div>
      {!loop && (
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
          <button onClick={fetchData}>Start</button>
        </>
      )}
      {loop && (
        <Questions
          list={questionList}
          click={handleAnswer}
          index={questionIndex}
        />
      )}
    </div>
  );
};

export default Quiz;
