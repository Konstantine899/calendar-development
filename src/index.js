import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/app/index';
import { DataProvider } from './Context/Data.Context';

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById('root')
);
