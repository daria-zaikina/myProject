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
      <div className="showplace card row">
        <div className="showplace-name card-header bg-warning">
          {name}
          <button type="button" className="close">
            <span aria-hidden="true" onClick={this.delShowplace}>
              &times;
            </span>
          </button>
        </div>
        <div className="showplace-location card-title col-4">{location}</div>
        <div className="showplace-duration card-title col-4">{duration}</div>
      </div>
    );
  }
}
export default Showplace;
