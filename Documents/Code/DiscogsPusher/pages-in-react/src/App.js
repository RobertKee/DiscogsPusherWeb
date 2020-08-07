import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Add from './Add.js'
import Edit from './Edit.js'
import Home from './Home.js'

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" ><Home /></Route>
      <Route path="/add">
            <Add />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
      </Switch>

    </Router>

  );
}

export default App;
