import React, { Component } from 'react';
import createRequest from 'adventure-core/adv-create-request';
import { fetchTasks } from 'adventure-core/adv-api-config';
import Adv from 'adventures/adv';


class Adventures extends Component {
    state = {
        adventures: [
          { id: '1', name: 'Tbilisi', dateFrom: '2019-05-20', dateTo: '2019-05-27' },
          { id: '1', name: 'Madrid', dateFrom: '2019-05-20', dateTo: '2019-05-27' },
          { id: '3', text: 'Berlin', dateFrom: '2019-05-20', dateTo: '2019-05-27' }
           ],
      };
    
      render() {
        const textadventuresObj = this.state.adventures;
        console.log('adventuresObj', typeof adventuresObj);
        const adventureList = adventuresObj['id'].map((text) => { text});
        console.log('adventuresList', adventureList);
        return (<div className='adventures'>{adventureList}</div>);
        // <Adv name={text} key={text.id} />}
    }

    componentDidMount() {
            createRequest(fetchTasks).then((request) => {
              if (request.status === 'OK') {
                this.setState({adventures: request.data});
              }
            });
            
    }  
  
}

export default Adventures;