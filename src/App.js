import React, { useReducer } from 'react';
import TaskAdder from './components/TaskAdder';
import List from './components/List';
import { reducer } from './reducer.js';
import './App.css';

const App = () => {
  const [tasks, dispatch] = useReducer(reducer, []);
  return (
    <div className="App">
      <h1>Todo with Hooks</h1>
      <TaskAdder dispatch={dispatch} />
      <List tasks={tasks} dispatch={dispatch} />
    </div>
  );
};

export default App;
