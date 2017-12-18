import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';

import {receiveTodos, receiveTodo} from './actions/todo_actions';

window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render("hello", root);
});
