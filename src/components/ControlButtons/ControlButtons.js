import React from 'react';
import Button from 'react-bootstrap/Button';
import { VscDebugContinue } from 'react-icons/vsc';
import { VscDebugReverseContinue } from 'react-icons/vsc';
import './ControlButton.css';
import PlayButton from '../PlayButton/PlayButton';

function ControlButton() {
    return (
        <div className='control-button'>
            <Button className='reverse-continue'><VscDebugReverseContinue/></Button>
            <PlayButton />
            <Button className='continue'><VscDebugContinue/></Button>
        </div>
    )
}

export default ControlButton;