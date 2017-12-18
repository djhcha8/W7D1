import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO }  from '../actions/todo_actions';
import store from '../store/store';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_TODO:
      newState = Object.assign({}, state, {[action.todo.id]: action.todo});
      return newState;

    case RECEIVE_TODOS:
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;

    case REMOVE_TODO:
      const storeTodos = store.getState().todos;
      for (let todoId in storeTodos) {
        todoId = parseInt(todoId);
        if (todoId !== action.todo.id) {
          newState[todoId] = storeTodos[todoId];
        }
      }
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
