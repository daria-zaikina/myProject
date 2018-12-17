import React, {PureComponent, createRef } from 'react';
import InputAdv from 'adventures/input-adv';

class FormAddAdv extends PureComponent {
    state = {};
   
    textRef = createRef();
    
    fields = [
        { label: 'Place', name: 'name' },
        { label: 'Date from', name: 'dateFrom' },
        { label: 'Date to', name: 'dateTo' },
      ];

    onSubmit = (event) => {
        event.preventDefault();
        const { onSend } = this.props;
        const data = this.state;
        console.log('state onsubmit', this.props);
        onSend(data);
        
        // addAdventure(this.textRef.current.value);
        // this.textRef.current.value = '';
    
        // console.log(this.textRef);
    };
    
    handleChange = (name,value) => {
        this.setState({[name]: value});
        console.log('stateform', this.state);
    }

    render() {
        return (
          <form className="form-group" onSubmit={this.onSubmit}>
            {this.fields.map(fieldData => (<InputAdv {...fieldData} handleChange={this.handleChange} />))}
             <button>Send data!!</button>
        </form>
        );
    }
}
export default FormAddAdv;