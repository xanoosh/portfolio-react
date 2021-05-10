import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../App.scss';

//project components:
import Main from './main/Main';
import Quiz from './quiz/Quiz';

//list of projects:
const projectList = [
  { path: '/quiz', title: 'Quiz', id: 0 },
  { path: '/poker-calculator', title: 'Texas Holdem Calculator', id: 0 },
  { path: '/recipe-app', title: 'Recipe app', id: 0 },
  { path: '/dice-app', title: 'Dice', id: 0 },
  { path: '/memory-app', title: 'Memory', id: 0 },
  { path: '/snake', title: 'Snake', id: 0 },
  { path: '/timezone-app', title: 'Timezone app', id: 0 },
  { path: '/map-generator', title: 'Map Generator', id: 0 },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Main projects={projectList} />
          </Route>
          <Route path="/quiz" exact>
            <Quiz />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
