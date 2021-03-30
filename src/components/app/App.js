//components/app/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Calendar } from '../Calendar/Calendar.js';
// import { InputQ1 } from '../Form/Input/InputQ1/InputQ1';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Calendar} />
          {/* <Route path="/form" component={InputQ1} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
