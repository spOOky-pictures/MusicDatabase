import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { VscDebugContinue } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";
import { VscDebugPause } from "react-icons/vsc";
import { VscDebugReverseContinue } from "react-icons/vsc";
import './Player.css';
import ProgressBar from '../ProgressBar/ProgressBar';

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
        <Card.Body className='player-body'>
            <div className='text'>
            <Card.Title className='artist-name'>{this.props.title}</Card.Title>
            <Card.Subtitle className='song-name'>{this.props.subtitle}</Card.Subtitle>
            </div>
            <ProgressBar className='progress' />
            <Button><VscDebugReverseContinue /></Button>
            <Button>{this.state.playing? <VscDebugPause onClick={this.handlePlayerClick} /> : <VscDebugStart onClick={this.handlePlayerClick} />}</Button>
            <Button><VscDebugContinue /></Button>
        </Card.Body>
      </Card>
    )
  }
}

export default Player;