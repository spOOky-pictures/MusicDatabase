import React, {Component} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='progress'>
                <ProgressBar now={this.props.now} />
            </div>
        )
    }
}

export default ProgressBar;