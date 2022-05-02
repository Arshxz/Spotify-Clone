import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { DataLayer } from './contextAPI/DataLayer';
import reducer, { initialState } from './contextAPI/Reducer';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
