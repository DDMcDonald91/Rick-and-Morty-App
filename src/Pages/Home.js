import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <Container>
        <Row>
            <Col>
            <div>
                <h1>Welcome to the Rick and Morty App</h1>
                <p>The number #1 fan app dedicated to finding information on your favorite Rick and Morty characters</p>
            </div>
            </Col>
        </Row>
    </Container>
  )
}
