import useState from 'react';
//quiz data for select values:
import Data from './Data.js';

//components:
import Select from './Select';

//destructure data:
const { CATEGORIES, DIFFICULTY, NUMBEROFQUESTIONS } = Data;

const Quiz = () => {
  const handleChange = (e) => {
    console.log(e.target.name);
  };
  console.log(CATEGORIES);
  return (
    <div>
      <Select
        title="categories"
        valuesArr={CATEGORIES}
        onChange={handleChange}
      />
      <Select
        title="difficulty"
        valuesArr={DIFFICULTY}
        onChange={handleChange}
      />
      <Select
        title="number of questions"
        valuesArr={NUMBEROFQUESTIONS}
        onChange={handleChange}
      />
    </div>
  );
};

export default Quiz;
