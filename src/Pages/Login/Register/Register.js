import React from 'react';
import {Form, Button} from 'react-bootstrap';

const Register = () => {
    return (
        <div>
            <h2>Register</h2>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="email" required placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  
    <Form.Control type="password" required placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  
    <Form.Control type="password" required placeholder="Confirm Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Register;