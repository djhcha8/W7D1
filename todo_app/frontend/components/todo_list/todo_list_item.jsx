import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  removeTodo(e) {
    e.preventDefault();
    this.props.removeTodo({id: this.props.todo.id});
  }

  buttonText() {
    return (this.props.todo.done ? "Done" : "Undone");
  }

  updateTodo(e) {
    e.preventDefault();
    this.props.todo.done = !this.props.todo.done;
    this.props.receiveTodo(this.props.todo);
  }

  render() {
    const doneButtonText = this.buttonText();

    return (
      <span>
        <li>{this.props.todo.title}</li>
        <button onClick={this.updateTodo}>{doneButtonText}</button>
        <button onClick={this.removeTodo}>Delete</button>
      </span>
    );
  }
}

export default TodoListItem;
