import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

const TodoList = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) =>
          <TodoListItem todo={ todo } />
        )}
      </ul>
      <TodoForm />
    </div>
  );
};

export default TodoList;
