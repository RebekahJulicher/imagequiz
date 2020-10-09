import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={props => <Home {...props} />}>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
