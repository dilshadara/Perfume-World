import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <>
          <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand as={Link} to="home" style={{fontWeight:'bold'}}>Perfume World</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="home">Home</Nav.Link> */}
            {/* <Nav.Link href="home#services">Services</Nav.Link> */}
        
          </Nav>
          <Nav>
              {/* <Nav.Link as={Link} to="about">About</Nav.Link> */}
              <Nav.Link as={Link} to="blogs">Blog</Nav.Link>
              {/* {
                user?
                  
                  <Button onClick={handleSignOut} className='bg-color'>
                  Sign Out
                  </Button>
                  :
                 <Nav.Link as={Link} to="login">Login</Nav.Link>
              } */}

<Nav.Link as={Link} to="login">Login</Nav.Link>
             
            </Nav>
          </Container>
        </Navbar>

        
          </>
        </div>
    );
};

export default Header;