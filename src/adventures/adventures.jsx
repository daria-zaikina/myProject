import React, { PureComponent } from 'react';
import createRequest from 'adventure-core/adv-create-request';
import { fetchAdventures, createAdv, deleteAdventure  } from 'adventure-core/adv-api-config';
import Adv from 'adventures/adv';
import FormAddAdv from 'adventures/form-add-adv';
import 'bootstrap/dist/css/bootstrap.css';
//import AddAdv from...

class Adventures extends PureComponent {
  state = {
      adventures: [
          // { id: '1', name: 'Tbilisi', dateFrom: '2019-05-20', dateTo: '2019-05-27' },
          // { id: '2', name: 'Madrid', dateFrom: '2019-05-20', dateTo: '2019-05-27' },
          // { id: '3', name: 'Berlin', dateFrom: '2019-05-20', dateTo: '2019-05-27' }
           ],
      isOpenedAddForm: false
      };

 componentDidMount() {
            createRequest(fetchAdventures).then((response) => {
              if (response.status === 'OK') {
                this.setState({adventures: response.data});
              }
            });
            
    }  

  addAdv = (adventure) => {
       this.setState({ isOpenedAddForm: !this.state.isOpenedAddForm});

      createRequest(createAdv, null, adventure).then((response) => {
        if (response.status === "OK") {
           this.setState({adventures: [response.data, ...this.state.adventures]});
            console.log('adventures request',this.state);
        }    
      });
    }

  deleteAdv = (id) => {
    console.log("delete", id);

      createRequest(deleteAdventure, {id}).then((response) => {
        if (response.status === "OK") {
          this.setState(
            {adventures: this.state.adventures.filter(
            (text) => {return text.id !== id})
            }
          )
        }
      }
    )
  }

  showAddForm =  () => {
      this.setState({ isOpenedAddForm: !this.state.isOpenedAddForm });
      console.log('я отобразил блок', this.state.isOpenedAddForm)
  }
  sortDateDesc(objDates) {
    console.log('objDates', objDates)
  }

  render() {
      const adventuresObj = this.state.adventures;
      console.log('adventuresObj', adventuresObj);
      
      const adventureList = adventuresObj.map(
      (text, index) => <Adv name={text} key={text.id} func={this.deleteAdv}/>);
      console.log('adventuresList', adventureList);
     
      return (
        <div className='adventures card'>
          <img className='image'/>
          <button type="button" className="btn btn-info" onClick={this.showAddForm}>Create new adventure</button>
          {
             this.state.isOpenedAddForm && <FormAddAdv onSend={this.addAdv}/>
           }
          {adventureList}
      </div>);
    }
  
}

export default Adventures;