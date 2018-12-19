import React, { PureComponent, createRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class InputAdv extends PureComponent {
  fieldElement = createRef();

  onChange = () => {
    const { handleChange, name } = this.props;
    console.log('onChange', this.props);
    handleChange(name, this.fieldElement.current.value);

    console.log('input ref', this.fieldElement);
  };

  render() {
    const { label, name } = this.props;
    console.log(this.props);
    return (
      <div>
        <lable className="col-sm-4 col-form-label">{label}</lable>
        <input
          type="text"
          name={name}
          ref={this.fieldElement}
          onChange={this.onChange}
          className="exampleFormControlInput1"
        />
      </div>
    );
  }
}
export default InputAdv;
