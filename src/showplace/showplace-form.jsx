import React, {PureComponent, createRef } from 'react';
import InputShowplace from 'showplace/showplace-form-input';

class FormAddShowplace extends PureComponent {
    state = {};
    
    fields = [
        { label: 'Showplace name', name: 'name' },
        { label: 'Location', name: 'location' },
        { label: 'Visit duration', name: 'duration' },
      ];

    handleChange = (name,value) => {
        this.setState({[name]: value});
        console.log('stateform', this.state);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { onSend, adventureId } = this.props;
        const data = this.state;
        data.adventureId = adventureId;
        console.log('data', data);
        console.log('state onsubmit', this.props);
        onSend(data);
    }

    render() {
       return (
            <form onSubmit={this.onSubmit}>
               { this.fields.map(fieldData => <InputShowplace {...fieldData} handleChange={this.handleChange} />) }
               <button className="btn btn-outline-warning">Send showplace</button>
            </form>
        );
    }
}

export default FormAddShowplace;