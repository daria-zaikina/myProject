import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

class Showplace extends PureComponent {
  delShowplace = () => {
    this.props.deleteFunc(this.props.data.id);
  };

  render() {
    console.log('отрендерилось одну достопремечательность', this.props.data);
    const { name, location, duration } = this.props.data;
    const deleteFunc = this.props.func;
    // const func = this.props.func;
    return (
      <div className="showplace card bg-warning mb-4">
        <div className="showplace-name card-header bg-info">
          {name}
          <button type="button" className="close">
            <span aria-hidden="true" onClick={this.delShowplace}>
              &times;
            </span>
          </button>
        </div>
        <div className="showplace-location card-title">{location}</div>
        <div className="showplace-duration card-title">{duration}</div>
      </div>
    );
  }
}
export default Showplace;
