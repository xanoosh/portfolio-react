import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../App.scss';

//project components:
import Main from './main/Main';
import Quiz from './quiz/Quiz';

//list of projects:
const projectList = [{ path: '/quiz', title: 'quiz', id: 1 }];

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
