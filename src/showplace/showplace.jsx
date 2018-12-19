import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

class Showplace extends PureComponent {
  deleteShowplace = () => {
    this.props.func(this.props.name.id);
  };

  render() {
    console.log('отрендерилось одну достопремечательность', this.props.data);
    const { name, id, location } = this.props.data;
    // const func = this.props.func;
    return (
      <div className="showplace card bg-warning mb-4">
        <div className="showplace-name card-header bg-info">
          {name}
          <button type="button" className="close">
            <span aria-hidden="true" onClick={this.deleteAdv}>
              &times;
            </span>
          </button>
        </div>
        <div className="showplace-date-from card-title">{location}</div>
      </div>
    );
  }
}
export default Showplace;
