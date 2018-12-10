import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class addTasks extends Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
  };

  textRef = createRef();

  onSubmit = (event) => {
    const { addTask } = this.props;
    console.log(this.props)

    event.preventDefault();
    addTask(this.textRef.current.value);
    this.textRef.current.value = '';

    console.log(this.textRef);
  };

  render() {
    return (
      <form className="add-task" onSubmit={this.onSubmit}>
        <input className="add-task-field" type="text" ref={this.textRef} />
        <input className="add-task-button" type="submit" value="ADD" />
      </form>
    );
  }
}

export default addTasks;
