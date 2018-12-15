import React, { Component } from 'react';
import createRequest from 'adventure-core/adv-create-request';
import { fetchTasks } from 'adventure-core/adv-api-config';
import Adv from 'adventures/adv';
import InputAdv from 'adventures/input-adv';
//import AddAdv from...

class Adventures extends Component {
    state = {
        adventures: [
          // { id: '1', name: 'Tbilisi', dateFrom: '2019-05-20', dateTo: '2019-05-27' },
          // { id: '2', name: 'Madrid', dateFrom: '2019-05-20', dateTo: '2019-05-27' },
          // { id: '3', name: 'Berlin', dateFrom: '2019-05-20', dateTo: '2019-05-27' }
           ],
           isOpenedAddAdverts: false
      };

    componentDidMount() {
            createRequest(fetchTasks).then((request) => {
              if (request.status === 'OK') {
                this.setState({adventures: request.data});
              }
            });
            
    }  

    addAdv(data) {
      this.setState({ isLoading: true });

      createRequest(addTask, null, data).then((response) => {
        if (response.status === "OK") {
            this.setState(({ adventures }) => ({
            isLoading: false,
            adventures: adventures.concat(response.data)
          }));
        }    
      });
    }

    render() {
      const adventuresObj = this.state.adventures;
      console.log('adventuresObj', adventuresObj);
      const adventureList = adventuresObj.map(
      (text, index) => <Adv name={text} key={text.id} />);
      console.log('adventuresList', adventureList);
      return (
      <div className='adventures'>{adventureList}
      {
        this.state.isOpenedAddAdverts && <FrormAddAdv onSend={this.addAdv}/>
      }
      </div>);
    }
  
}

export default Adventures;