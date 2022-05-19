import { Container,Row,Col,Card, Form, Button } from "react-bootstrap";

const Signin = () => {
  return (
    <Container  fluid >
      <Row  class="d-flex justify-content-between m-5 p-2 "style={{height:'600px'}}>
    <Col className="m-5" >
    <Card style={{ width: '100%',backgroundColor:'#180A0A' }}>
  <Card.Img style={{ width: '80%',height:'450px'}} variant="top" src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title style={{color:'white'}}>Card Title</Card.Title>
    <Card.Text style={{color:'white'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="m-5" variant="primary">login</Button>
    <Button variant="primary">registrasi</Button>
  </Card.Body>
</Card>
    
</Col>
    <Col md={4} className="m-5" > <Form style={{ height:'100%'}}>
      <h1 style={{color:'white'}}className="mb-3"> Login</h1>
       
        <Form.Group className="mb-3">
          <Form.Label  style={{color:'white'}}>email</Form.Label>
          <Form.Control type="email" placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label  style={{color:'white'}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit"style={{width:'100%'}}>
          Submit
        </Button>
        
      </Form></Col>
  </Row>
     
    </Container>
  );
};

export default Signin;
