import { Form, Button } from "react-bootstrap";
import React from 'react';
// import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
          <h2>Login</h2>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="email" required placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
 
    <Form.Control type="password" required placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

{/* <Link to="/register"></Link> */}
        </div>
    );
};

export default Login;