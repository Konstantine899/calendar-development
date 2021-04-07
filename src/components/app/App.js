//components/app/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { rootReducer } from '../../redux/reducers/root.reducer.js';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Calendar } from '../Calendar/Calendar.js';
import { Step1 } from '../Form/Step1';
import './App.scss';

export const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Calendar} />
            <Route path="/form" component={Step1} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
