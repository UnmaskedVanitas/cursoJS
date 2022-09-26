import React from "react";
import Card from 'react-bootstrap/Card'

const Card = (props) => {
    return  <div>
                <Card style={{ width: "18rem" }}>
                    <Card.img variant="top" src={props.url}/>
                    <Card.Body>
                        <Card.Title>{props.titulo}</Card.Title>
                        <Card.Text>{props.descripcion}</Card.Text>
                    </Card.Body>
                </Card>

            </div>
}

export default Card