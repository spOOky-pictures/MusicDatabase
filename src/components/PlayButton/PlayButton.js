import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import { VscDebugStart } from "react-icons/vsc";
import { VscDebugPause } from "react-icons/vsc";
import '../PlayButton/PlayButton.css';

class PlayButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false
        }
    }

    handlePlayerClick = () => {
        if (!this.state.playing) {
          this.setState({playing: true})
        } else {
          this.setState({playing: false})
        }
    }

    render() {
        return (
            <Button className='play-button'>{this.state.playing? <VscDebugPause onClick={this.handlePlayerClick} /> : <VscDebugStart onClick={this.handlePlayerClick} />}</Button>
        )
    }
}

export default PlayButton;