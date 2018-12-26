import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { fetchShowplaces, createShowplace, deleteShowplace } from 'showplace-core/api-config';
import createRequest from 'adventure-core/create-request';
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

      createRequest(deleteShowplace, {id}).then((response) => {
        if (response.status === "OK") {
          this.setState(
            {showplaces: this.state.showplaces.filter(
            (text) => {return text.id !== id})
            }
          )
        }
      }
    )
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


  render() {
    const { adventureId } = this.props
    const showplacesObj = this.state.showplaces;
    console.log('отрендерилось одна достоприм', this.state);
    console.log('adventureId', adventureId);
    return (
      <div>
         <button type="button" className="btn btn-warning" onClick={this.showShowplaceForm}>Create new showplace</button>
         {
             this.state.isOpendShowplaceForm && <FormAddShowplace onSend={this.addShowplace} adventureId={adventureId} />
           }
         {showplacesObj.map((text) => <Showplace data={text} deleteFunc={this.deleteShowplace} />)}
       </div>
      );
  }
}
export default Showplaces;
