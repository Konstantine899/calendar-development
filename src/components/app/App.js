//components/app/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Calendar } from '../Calendar/Calendar.js';
import { Step1 } from '../Form/Step1';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Calendar} />
          <Route path="/form" component={Step1} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
