import React, {PureComponent} from 'react';
import InputAdv from 'adventures/input-adv';

class FrormAddAdv extends PureComponent {
    state = {};

    onSubmit(data) {
        const data = {};
    }
    
    fields = [
        { label: 'Place', name: 'place' },
        { label: 'Date from', name: 'dateFrom' },
        { label: 'Date to', name: 'dateTo' },
      ];

    render() {
        return (
        <form onSubmit={this.onSubmit}>
            {this.fields.map(data => (<InputAdv {...fieldData} />))}
        </form>;
        )
    }



}
export default FrormAddAdv;