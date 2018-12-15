import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Adv extends Component {
    render() {
       const { adventure } = this.props
       console.log("adventure", adventure)
       return (
        <div className='adventure' data-id={adventure.id}>{adventure.name}</div>
       );
    }

}
export default Adv;