import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function Player(props) {
    return (
        <Card className='player-card'>
            <Card.Img variant="left" src={props.imgPath} alt="player-card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>{props.subtitle}</Card.Subtitle>
                <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
                </Button>
                {"\n"}
                {"\n"}

                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

                {!props.isBlog && props.demoLink && (
                <Button
                    variant="primary"
                    href={props.demoLink}
                    target="_blank"
                    style={{ marginLeft: "10px" }}
                >
                    <CgWebsite /> &nbsp;
                    {"Demo"}
                </Button>
                )}
            </Card.Body>
        </Card>
    )
}

export default Player;