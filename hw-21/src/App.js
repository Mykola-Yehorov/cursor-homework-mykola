import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/hw-styles" >
            <Redirect to="/signup" />
          </Route>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
