import React, { PureComponent, createRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class InputAdventure extends PureComponent {
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
      <div class="form-group row">
         <label className="col-sm-2 col-form-label">{label}</label>
         <div class="col-sm-7">
           <input type="text" class="form-control" name={name}
          ref={this.fieldElement}
          onChange={this.onChange} />
        </div>
     </div>);
  }
}
export default InputAdventure;
