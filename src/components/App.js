import { ReactRouter as Router, Switch, Route } from 'react-router-dom';
import '../App.scss';

//project components:
import Main from './components/main/Main';
import Quiz from './components/main/Quiz';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Main />
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
