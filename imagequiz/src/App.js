import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Quiz1 from './components/Quiz-1';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/imagequiz/' render={props => <Home {...props} />}>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/quiz1'>
          <Quiz1 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
