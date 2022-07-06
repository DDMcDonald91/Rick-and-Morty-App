import React from 'react'
import {Card, ListGroup, ListGroupItem, Container} from 'react-bootstrap';

export default function Cards(props) {
  return (
  <Container id='cardContainer'>
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>Name: {props.name}</Card.Title>
        <Card.Text>
          Here is some infomation below:
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Status: {props.status}</ListGroupItem>
        <ListGroupItem>Species: {props.species}</ListGroupItem>
        <ListGroupItem>Gender: {props.gender}</ListGroupItem>
      </ListGroup>
    </Card>
  </Container>
  )
}
