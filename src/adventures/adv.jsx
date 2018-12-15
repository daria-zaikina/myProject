import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Adv extends PureComponent {
  render() {
    const {
 name, id, dateFrom, dateTo,
} = this.props.name;
    console.log('adv this.props)', this.props);
    return (
      <div className="adventure" data-id={id}>
        <div className="adventure-name">{name}</div>
        <div className="adventure-date-from">{dateFrom}</div>
        <div className="adventure-date-to">{dateTo}</div>
      </div>
    );
  }
}
export default Adv;
