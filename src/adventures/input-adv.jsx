import React, { Component } from 'react';

class InputAdv extends Component {
  state = {};

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(`Submit${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <lable>
          Place:
          <input
            type="text"
            placeholder={this.props.name}
            value={this.props.value}
            onChange={this.handleChange}
          />
        </lable>
        <lable>
          dateFrom:
          <input type="text" placeholder="dateFrom" value={this.state.value} />
        </lable>
        <lable>
          dateTo:
          <input type="text" placeholder="dateTo" value={this.state.value} />
        </lable>
        <input type="submit" value="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}
export default InputAdv;
