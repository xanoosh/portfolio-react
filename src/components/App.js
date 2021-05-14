import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../App.scss';

//project components:
import Main from './main/Main';
import Quiz from './quiz/Quiz';
import RecipeApp from './recipe-app/RecipeApp';

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
          <Route path="/recipe-app" exact>
            <RecipeApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
