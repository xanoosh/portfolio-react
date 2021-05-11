import { useState } from 'react';
//quiz data for select values:
import Data from './Data.js';

//components:
import Select from './Select';

//destructure data:
const { CATEGORIES, DIFFICULTY, NUMBEROFQUESTIONS, TESTRESPONSEDATA } = Data;

const Quiz = () => {
  const [categoriesValue, setCategoriesValue] = useState(CATEGORIES[0].value);
  const [difficultyValue, setDifficultyValue] = useState(DIFFICULTY[0].value);
  const [numberOfQuestionsValue, setNumberOfQuestionsValue] = useState(
    NUMBEROFQUESTIONS[0].value
  );
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

  return (
    <div>
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
    </div>
  );
};

export default Quiz;
