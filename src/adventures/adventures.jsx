import React, { PureComponent } from 'react';
import createRequest from 'adventure-core/adv-create-request';
import { fetchAdventures, createAdv  } from 'adventure-core/adv-api-config';
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
           isOpenedAddAdverts: true
      };

    componentDidMount() {
            createRequest(fetchAdventures).then((response) => {
              if (response.status === 'OK') {
                this.setState({adventures: response.data});
              }
            });
            
    }  

  addAdv(adventure) {
      // this.setState({ isLoading: true });

      createRequest(createAdv, null, adventure).then((response) => {
        if (response.status === "OK") {
           () => {this.setState({adventures: adventure.concat(response.data)});}
            console.log('adventures request', response.data);
        }    
      });
    }

    render() {
      const adventuresObj = this.state.adventures;
      console.log('adventuresObj', adventuresObj);
      
      const adventureList = adventuresObj.map(
      (text, index) => <Adv name={text} key={text.id}/>);
      console.log('adventuresList', adventureList);
     
      return (
        <div className='adventures card'>
          <img className='image' src="../img/image.jpg" />
          <button type="button" className="btn btn-info">Create new adventure</button>
          {
             this.state.isOpenedAddAdverts && <FormAddAdv onSend={this.addAdv}/>
           }
          {adventureList}
      </div>);
    }
  
}

export default Adventures;