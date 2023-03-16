import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Player(props) {
    return (
        <Card className='player-card'>
            <Card.Img variant="left" src={props.imgPath} alt="player-card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>{props.subtitle}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default Player;