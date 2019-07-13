import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './App'
import './index.css';

const store = createStore(rootReducer, {
  todos: [
    { id: 1, text: 'Read about React-Hooks on NetNinja', completed: true },
    { id: 2, text: 'Create sample app with React-Hooks', completed: false },
  ],
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)