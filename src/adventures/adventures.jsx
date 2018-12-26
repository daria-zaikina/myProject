import React, { PureComponent } from 'react';
import createRequest from 'adventure-core/create-request';
import { fetchAdventures, createAdventure, deleteAdventure  } from 'adventure-core/api-config';
import Adventure from 'adventures/adventure';
import FormAddAdventure from 'adventures/form-add-adventure';
import 'bootstrap/dist/css/bootstrap.css';
import Slider from 'adventures/slider'

class Adventures extends PureComponent {
  state = {
      adventures: [
          // { id: '1', name: 'Tbilisi', country: 'Tbilisi', city: '', dateFrom: '2019-05-20', dateTo: '2019-05-27',timeFrom: '', timeTo: '' }
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

  sortByDate = (A, B) => {
     const dateA=new Date(A.dateFrom), dateB=new Date(B.dateFrom)
     return dateA-dateB;
  }
  
  sortAdventures = () => {
     this.setState({adventures: this.state.adventures.sort(this.sortByDate)})
     console.log('sort state',  this.state.adventures.sort(this.sortByDate));
     this.forceUpdate();
  }

  addAdventure = (adventure) => {
       this.setState({ isOpenedAddForm: !this.state.isOpenedAddForm});

      createRequest(createAdventure, null, adventure).then((response) => {
        if (response.status === "OK") {
           this.setState({adventures: [response.data, ...this.state.adventures]});
            console.log('adventures request',this.state);
        }    
      });
    }

  deleteAdventure = (id) => {
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

  showAddAdventureForm = () => {
      this.setState({ isOpenedAddForm: !this.state.isOpenedAddForm });
      console.log('я отобразил блок', this.state.isOpenedAddForm)
  }

  render() {
      const adventuresObj = this.state.adventures;
      console.log('adventuresObj', adventuresObj);
      
      const adventuresComponentList = adventuresObj.map(
      (text, index) => 
      <Adventure name={text} key={text.id} func={this.deleteAdventure} />);
      console.log('adventuresList', adventuresComponentList);
     
      return (
        <div className="container-fluid">
          <div className="row justify-content-center">
             <div className='adventures card col-6'>
             <Slider />
             <div className='row justify-content-center'>
                <button type="button" className="btn btn-outline-info col-4" onClick={this.showAddAdventureForm}>Create new adventure</button>
                <button type="button" className="btn btn-outline-info col-4" onClick={this.sortAdventures}>Sort adventures by date</button>
             </div>
             {
                this.state.isOpenedAddForm && <FormAddAdventure onSend={this.addAdventure}/>
              }
             {adventuresComponentList}
             </div>
           </div>
      </div>);
    }
  
}

export default Adventures;