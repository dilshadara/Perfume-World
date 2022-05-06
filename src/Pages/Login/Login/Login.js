import { Form, Button } from "react-bootstrap";
import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
          <h2>Login</h2>
            <Form>
 
    <Form.Control type="email" required placeholder="Enter email" />
    
    <Form.Control type="password" required placeholder="Password" />
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

  <Link to="/register">Register</Link>
        </div>
    );
};

export default Login;