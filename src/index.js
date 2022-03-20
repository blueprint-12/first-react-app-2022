import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import Coin from './Coin';

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
    <Coin />
  </React.StrictMode>,
  document.getElementById('root'),
);
