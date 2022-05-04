import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"><span className='text-warning fw-bolder'>Babies</span> Island</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto fw-bolder">
    <Nav.Link as={Link}  to="/home">Home</Nav.Link>
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link href="home#whyChoose">whyChoose</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
    
      <Nav.Link as={Link} to="/about">About</Nav.Link>
    </Nav>
    <Nav>
      {
        user? 
        <Nav.Link as={Link} to="/" onClick={handleSignOut}>Sign Out</Nav.Link>
        :
        <div className='d-lg-flex'>
           <Nav.Link as={Link} to="/login">Log In</Nav.Link>
           <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>  
        </div>
       
      }
   
    
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;