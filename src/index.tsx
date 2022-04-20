import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import reportWebVitals from './reportWebVitals';
import configureStore from './store';

export const preLoadedState = {
  data: { people: { loaded: false, next: 'people', data: [] } },
  dataDetails: [],
  ui: {
    filter: '',
    sort: 'name',
    isLoading: false,
    error: null,
  },
};

const store = configureStore(preLoadedState);

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
