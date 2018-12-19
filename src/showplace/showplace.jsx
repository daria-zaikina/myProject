import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { fetchShowplaces } from 'showplace-core/api-config';
import createRequest from 'adventure-core/adv-create-request';

class Showplace extends PureComponent {
  state = {
    showplaces: [
      // { id: '', name: '', location: '', duration: '', adventureId: ''}
    ],
  };

  componentDidMount() {
    const { adventureId } = this.props;

    createRequest(fetchShowplaces, { adventureId }).then((response) => {
      if (response.status === 'OK') {
        this.setState({ showplaces: response.data });
      }
    });
  }

  // deleteShowplace = () => {
  //   this.props.func(this.props.name.id);
  // };

  render() {
    console.log('отрендерилось одна достоприм', this.state);
    return (
      <div className="showplace card bg-warning mb-4">
        <div className="showplace-name card-header bg-info">
          {this.state.name}
          <button type="button" className="close">
            <span aria-hidden="true" onClick={this.deleteAdv}>
              &times;
            </span>
          </button>
        </div>
        <div className="showplace-location card-title">{this.state.location}</div>
        <div className="showplace-duration card-title">{this.state.duration}</div>
      </div>
    );
  }
}
export default Showplace;
