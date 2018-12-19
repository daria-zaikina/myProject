import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

class Showplace extends PureComponent {
  state = {
    showplaces: [
      // { id: '', name: '', location: '', duration: '', adventureId: ''}
    ]
    };

    deleteShowplace = () => {
      this.props.func(this.props.name.id);
    }

    requestShowplace () {
      console.log(" Вызвалась функция requestShowplace")
      createRequest(fetchShowplace).then((response) => {
        if (response.status === 'OK') {
          this.setState({showplaces: response.data});
        }
      });
    }
  
    render() {
      console.log('отрендерилось одно путешествие');
      const {
   name, id, location, duration
  } = this.state;
      const func = this.props.func;
      console.log('Showplace this.props', func);
      return (
        <div className="showplace card bg-warning mb-4" data-id={id}>
          <div className="showplace-name card-header bg-info">
            {name}
            <button type="button" className="close">
              <span aria-hidden="true" onClick={this.deleteAdv}>
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
  