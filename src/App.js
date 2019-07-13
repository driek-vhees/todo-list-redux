import React from 'react'
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App