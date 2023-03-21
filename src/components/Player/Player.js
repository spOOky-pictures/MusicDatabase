import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { VscDebugContinue } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";
import { VscDebugPause } from "react-icons/vsc";
import { VscDebugReverseContinue } from "react-icons/vsc";
import './Player.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import ReactAudioPlayer from 'react-audio-player';

class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
  };
}

componentDidUpdate(prevProps) {
  if (prevProps.track !== this.props.track) {
    this.setState({
      isPlaying: false,
      currentTime: 0,
      duration: 0,
    });
  }
}

handlePlayPause = () => {
  this.setState({ isPlaying: !this.state.isPlaying });
};

handleBackward = () => {
  // logic to go backward in the track
};

handleForward = () => {
  // logic to go forward in the track
};

handleTimeUpdate = e => {
  this.setState({
    currentTime: e.target.currentTime,
    duration: e.target.duration,
  });
};

render() {
  const { track } = this.props;
  const { isPlaying, currentTime, duration } = this.state;

  if (!track) {
    return <div>Loading...</div>; // or any other suitable UI when track is undefined
  }

  return (
    <Card className='music-player'>
      <Card.Img className='player-card-img' variant="left" src={track.albumCover} alt={track.songName} />
      <Card.Body className='player-body'>
          <div className='text'>
          <Card.Title className='artist-name'>{track.artistName}</Card.Title>
          <Card.Subtitle className='song-name'>{track.songName}</Card.Subtitle>
          </div>
          <ReactAudioPlayer
          src={track.audioUrl}
          onPlay={this.handlePlayPause}
          onPause={this.handlePlayPause}
          onEnded={this.handleForward}
          onTimeUpdate={this.handleTimeUpdate}
          autoPlay={false}
          controls={false}
          />
          <ProgressBar currentTime={currentTime} duration={duration} />
          <div>
          <Button onClick={this.handleBackward}><VscDebugReverseContinue /></Button>
          <Button onClick={this.handlePlayPause}>{this.state.playing? <VscDebugPause onClick={this.handlePlayerClick} /> : <VscDebugStart onClick={this.handlePlayerClick} />}</Button>
          <Button onClick={this.handleForward}><VscDebugContinue /></Button>
          </div>
      </Card.Body>
    </Card>
  )
}
}

export default Player;