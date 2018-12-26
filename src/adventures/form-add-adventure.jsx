import React, {PureComponent, createRef } from 'react';
import InputAdventure from 'adventures/input-adventure';
import 'bootstrap/dist/css/bootstrap.css';

class FormAddAdventure extends PureComponent {
    state = {};
   
    textRef = createRef();
    
    fields = [
        { label: 'Adventure name', name: 'name' },
        { label: 'Country', name: 'country' },
        { label: 'City', name: 'city' },
        { label: 'Date from', name: 'dateFrom' },
        { label: 'Date to', name: 'dateTo' },
        { label: 'Time from', name: 'timeFrom' },
        { label: 'Time to', name: 'timeTo' }
      ];

    onSubmit = (event) => {
        event.preventDefault();
        const { onSend } = this.props;
        const data = this.state;
        console.log('state onsubmit', data);
        onSend(data);
    };
    
    handleChange = (name,value) => {
        this.setState({[name]: value});
        console.log('stateform', this.state);
    }

    render() {
        return (
          <form className="form-group" onSubmit={this.onSubmit}>
            {this.fields.map(fieldData => (<InputAdventure {...fieldData} handleChange={this.handleChange} />))}
             <button className="btn btn-outline-info">Send data!!</button>
        </form>
        );
    }
}
export default FormAddAdventure;