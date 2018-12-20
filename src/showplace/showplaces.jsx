import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { fetchShowplaces, createShowplace } from 'showplace-core/api-config';
import createRequest from 'adventure-core/adv-create-request';
import Showplace from 'showplace/showplace';
import FormAddShowplace from 'showplace/showplace-form';

class Showplaces extends PureComponent {
  state = {
    showplaces: [
      // { id: '', name: '', location: '', duration: '', adventureId: ''}
    ],
    isOpendShowplaceForm: false
  };

  showShowplaceForm = () => {
    this.setState({ isOpendShowplaceForm: !this.state.isOpendShowplaceForm })
    console.log('showShowplaceForm');
  }

  addShowplace = (showplaces) => {
    createRequest(createShowplace, null, showplaces).then((response) => {
      if (response.status === "OK") {
         this.setState({showplaces: [response.data, ...this.state.showplaces]});
          console.log('adventures request',this.state);
      }    
    });
  }

  deleteShowplace = (id) => {
    console.log("delete Showplace", id);

      // createRequest(deleteAdventure, {id}).then((response) => {
      //   if (response.status === "OK") {
      //     this.setState(
      //       {adventures: this.state.adventures.filter(
      //       (text) => {return text.id !== id})
      //       }
      //     )
      //   }
      // }
    // )
  }

  componentDidMount() {
    const { adventureId } = this.props;

    createRequest(fetchShowplaces, { adventureId }).then((response) => {
      if (response.status === 'OK') {
        this.setState({ showplaces: response.data });
      }
    });
    console.log('showplaces', this.state);
  }

  // deleteShowplace = () => {
  //   this.props.func(this.props.name.id);
  // };

  render() {
    const { adventureId } = this.props
    const showplacesObj = this.state.showplaces;
    console.log('отрендерилось одна достоприм', this.state);
    console.log('adventureId', adventureId);
    return (
      <div>
         <button type="button" className="btn btn-info" onClick={this.showShowplaceForm}>Create new showplace</button>
         {
             this.state.isOpendShowplaceForm && <FormAddShowplace onSend={this.addShowplace} adventureId={adventureId} />
           }
         {showplacesObj.map((text) => <Showplace data={text} />)}
       </div>
      );
  }
}
export default Showplaces;
