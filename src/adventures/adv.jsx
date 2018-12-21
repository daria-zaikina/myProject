import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Showplaces from 'showplace/showplaces';

class Adv extends PureComponent {
  state = {
    isOpenedShowplace: false
  };
 
  
  deleteAdv = () => {
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
            <span aria-hidden="true" onClick={this.deleteAdv}>
              &times;
            </span>
          </button>
        </div>
        <div className='value-conteiner'>
           <div className="lable">Country:</div>
           <div className="adventure-country lable">{country}</div>
        </div>
        <div className='value-conteiner'>
          <div className="lable">City:</div>
          <div className="adventure-city lable">{city}</div>
        </div>
        <div className='value-conteiner'>
          <div className="lable">Date from:</div>
          <div className="adventure-date-from lable">{dateFrom}</div>
        </div>
        <div className='value-conteiner'>
          <div className="lable">Date to:</div>
          <div className="adventure-date-to lable">{dateTo}</div>
        </div>
        <div className='value-conteiner'>
          <div className="lable">Time from:</div>
          <div className="adventure-time-from lable">{timeFrom}</div>
        </div>
        <div className='value-conteiner'>
          <div className="lable">Time to:</div>
          <div className="adventure-time-to lable">{timeTo}</div>
        </div>
        <button type="button" className="btn btn-outline-info" onClick={this.showShowplaces}>Open showplace</button>
        {
          this.state.isOpenedShowplace && <Showplaces adventureId={id} />
        }
      </div>
    );
  }
}
export default Adv;
