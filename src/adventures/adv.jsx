import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Showplace from 'showplace/showplace';

class Adv extends PureComponent {
  deleteAdv = () => {
    this.props.func(this.props.name.id);
  };

  render() {
    console.log('отрендерилось одно путешествие');
    const {
 name, id, dateFrom, dateTo,
} = this.props.name;
    const func = this.props.func;
    console.log('adv this.props', func);
    return (
      <div className="adventure card bg-warning mb-4" data-id={id}>
        <div className="adventure-name card-header bg-info">
          {name}
          <button type="button" className="close">
            <span aria-hidden="true" onClick={this.deleteAdv}>
              &times;
            </span>
          </button>
        </div>
        <div className="adventure-date-from card-title">{dateFrom}</div>
        <div className="adventure-date-to card-title">{dateTo}</div>
        <Showplace adventureId={this.id}/>
      </div>
    );
  }
}
export default Adv;
