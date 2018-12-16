import React, { PureComponent, createRef } from 'react';
import FormAddAdv from 'adventures/form-add-adv';

class InputAdv extends PureComponent {

  fieldElement = createRef()

  onChange = () => {
   const { handleChange, name } = this.props;
   console.log('onChange', this.props);
   handleChange(name, this.fieldElement.current.value);
   console.log('input ref', this.fieldElement)
  }
  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(event) {
  //   alert(`Submit${this.state.value}`);
  //   event.preventDefault();
  // }

  render() {
    const { label, name } = this.props;
    console.log(this.props);
    return (
      <div>
        <lable>{label}</lable>
        <input type="text" name={name} 
               ref={this.fieldElement}
               onChange={this.onChange}/>
      </div>
    );
  }
}
export default InputAdv;
