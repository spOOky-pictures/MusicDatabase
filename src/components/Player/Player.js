import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { VscDebugContinue } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";
import PlayButton from '../PlayButton/PlayButton';

import { VscDebugPause } from "react-icons/vsc";
import { VscDebugReverseContinue } from "react-icons/vsc";
import './Player.css';

class Player extends Component {

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
      <Card className='player-card'>
        <Card.Img className='player-card-img' variant="left" src={this.props.imgPath} alt="player-card-img" />
        <Card.Body>
            <Card.Title className='artist-name'>{this.props.title}</Card.Title>
            <Card.Subtitle className='song-name'>{this.props.subtitle}</Card.Subtitle>
            <Button><VscDebugReverseContinue /></Button>
            <PlayButton />
            <Button><VscDebugContinue /></Button>
        </Card.Body>
      </Card>
    )
  }
}

export default Player;