import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Adv extends PureComponent {
  render() {
    const {
 name, id, dateFrom, dateTo,
} = this.props.name;
    console.log('adv this.props)', this.props);
    return (
      <div className="adventure card bg-warning mb-4" data-id={id}>
        <div className="adventure-name card-header bg-info">{name}</div>
        <div className="adventure-date-from card-title">{dateFrom}</div>
        <div className="adventure-date-to card-title">{dateTo}</div>
      </div>
    );
  }
}
export default Adv;
