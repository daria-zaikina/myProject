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
        <div className="input-lable">{label}</div>
        <input
          type="text"
          name={name}
          ref={this.fieldElement}
          onChange={this.onChange}
          className="exampleFormControlInput1lable input"
        />
      </div>
    );
  }
}
export default InputAdv;
