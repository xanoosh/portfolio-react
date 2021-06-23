import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../App.scss';

//project components:
import Main from './main/Main';
import Quiz from './quiz/Quiz';
import RecipeApp from './recipe-app/RecipeApp';
import Snake from './snake/Snake';
import Memory from './memory/Memory';

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
          <Route path="/snake" exact>
            <Snake />
          </Route>
          <Route path="/memory" exact>
            <Memory />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
