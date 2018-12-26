import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Showplaces from 'showplace/showplaces';

class Adventure extends PureComponent {
  state = {
    isOpenedShowplace: false
  };
 
  deleteAdventure = () => {
    this.props.func(this.props.name.id);
  };

  showShowplaces = () => {
    console.log('я вызвал showShowplace')
    this.setState({ isOpenedShowplace: !this.state.isOpenedShowplace });
  }

  render() {
    console.log('отрендерилось одно путешествие', this.props.name);
    const {
 name, id, country, city, timeFrom, timeTo, dateFrom, dateTo
} = this.props.name;
    const func = this.props.func;
    console.log('adv this.props', func);
    return (
      <div className="adventure rounded" data-id={id}>
        <div className="adventure-name card-header bg-info">
          {name}
          <button type="button" className="close">
            <span aria-hidden="true" onClick={this.deleteAdventure}>
              &times;
            </span>
          </button>
        </div>
        <div className="row">
           <div className="col-2 col-form-label">Country:</div>
           <div className="adventure-country col-10">{country}</div>
        </div>
        <div className="row">
          <div className="col-2 col-form-label">City:</div>
          <div className="adventure-city col-10">{city}</div>
        </div>
        <div className="row">
          <div className="col-2 col-form-label">Date from:</div>
          <div className="adventure-date-from col-10">{dateFrom}</div>
        </div>
        <div className="row">
          <div className="col-2 col-form-label">Date to:</div>
          <div className="adventure-date-to col-10">{dateTo}</div>
        </div>
        <div className="row">
          <div className="col-2 col-form-label">Time from:</div>
          <div className="adventure-time-from col-10">{timeFrom}</div>
        </div>
        <div className="row">
          <div className="col-2 col-form-label">Time to:</div>
          <div className="adventure-time-to col-10">{timeTo}</div>
        </div>
        <button type="button" className="btn btn-outline-warning" onClick={this.showShowplaces}>Open showplace</button>
        {
          this.state.isOpenedShowplace && <Showplaces adventureId={id} />
        }
      </div>
    );
  }
}
export default Adventure;
