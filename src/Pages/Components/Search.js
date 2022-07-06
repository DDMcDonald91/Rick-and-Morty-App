import { Form, Button, Container } from 'react-bootstrap';
import { useState }  from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/results/" + input);
}
  return (
  <Container fluid id='searchOuter'>
    <Container fluid id='searchContainer'>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Character Search</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter a name" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            />
          <Form.Text>
            Enter a name (ex: "rick")
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" id='searchButton'>
          Submit
        </Button>
      </Form>
    </Container>
  </Container>
  )
}
