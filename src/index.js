import React from 'react';
import uuid from 'uuid';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './App';
import './index.css';

const store = createStore(rootReducer, {
  todos: [
    { id: uuid(), text: 'Create sample app with React-Hooks', completed: false },
    { id: uuid(), text: 'Read about React-Hooks on NetNinja', completed: true },
  ],
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
