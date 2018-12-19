import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { fetchShowplaces } from 'showplace-core/api-config';
import createRequest from 'adventure-core/adv-create-request';
import Showplace from 'showplace/showplace';

class Showplaces extends PureComponent {
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
    const showplacesObj = this.state.showplaces;
    console.log('отрендерилось одна достоприм', this.state);
    console.log('showplacesObj', showplacesObj);
    return (
       showplacesObj.map((text) => <Showplace data={text} />)
      );
  }
}
export default Showplaces;
