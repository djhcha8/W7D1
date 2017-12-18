import React from 'react';
import util from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
  }

  updateTitle(e) {
    const title = e.target.value;
    this.setState({ title });
  }

  updateBody(e) {
    const body = e.target.value;
    this.setState({ body });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input onChange={this.updateTitle} type='text' value = {this.state.title}/>
        </label>
        <br />
        <label>
          Body:
          <textarea onChange={this.updateBody} value={this.state.body} />
        </label>
        <br />
        <input type='submit' value='Add New Todo'/>
      </form>
    );
  }
}

export default TodoForm;
