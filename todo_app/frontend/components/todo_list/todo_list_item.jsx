import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(e) {
    e.preventDefault();
    this.props.removeTodo({id: this.props.todo.id});
  }



  render() {
    return (
      <span>
        <li>{this.props.todo.title}</li>
        <button onClick={this.removeTodo}>Delete</button>
      </span>
    );
  }
}

export default TodoListItem;
