import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut =() =>{
    signOut(auth);
  }

    return (
        <div>
          <>
          <Navbar bg="light" variant="light" collapseOnSelect expand="lg" sticky='top'>
          <Container>
          <Navbar.Brand as={Link} to="home" style={{fontWeight:'bold'}}>Perfume World</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="home">Home</Nav.Link> */}
            {/* <Nav.Link href="home#hotDeals">Hot Deals</Nav.Link>
            <Nav.Link href="home#newArrivals">New Arrivals</Nav.Link> */}
        
          </Nav>
          <Nav>
              {/* <Nav.Link as={Link} to="about">About</Nav.Link> */}
              <Nav.Link as={Link} to="blogs">Blog</Nav.Link>
              <Nav.Link as={Link} to="myItems">My Items</Nav.Link>
              <Nav.Link as={Link} to="manageInventory">Manage Inventory</Nav.Link>
              {
                user?
                  
                  <Button onClick={handleSignOut} className='bg-color'>
                  Sign Out
                  </Button>
                  :
                 <Nav.Link as={Link} to="login">Login</Nav.Link>
              }             
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        
          </>
        </div>
    );
};

export default Header;