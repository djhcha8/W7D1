import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

const TodoList = ({ todos, receiveTodo, removeTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) =>
          <TodoListItem todo={ todo } removeTodo={removeTodo} receiveTodo={receiveTodo} />
        )}
      </ul>
      <TodoForm receiveTodo={receiveTodo} />
    </div>
  );
};

export default TodoList;
