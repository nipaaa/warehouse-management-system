import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
}
    return (
    
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="success" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"><span className='text-warning fw-bolder'>Dream</span> Of Style</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      <Nav.Link as={Link} to="/inventory">Items</Nav.Link>
      <Nav.Link as={Link} to="/aboutUs">About</Nav.Link>
      <Nav.Link as={Link} to="/contactUs">Contact</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
    </Nav>
    <Nav>
    {
        user? 
       <div className='d-lg-flex'>
        <Nav.Link as={Link} to="/addItem" >Add Item</Nav.Link>
        <Nav.Link as={Link} to="/manageItem" >Manage Item</Nav.Link>
        <Nav.Link as={Link} to="/myItems" >My Items</Nav.Link>
        <Nav.Link as={Link} to="/" onClick={handleSignOut}>Sign Out</Nav.Link>
       </div>
        :
        <div className='d-lg-flex'>
           <Nav.Link as={Link} to="/login">Log In</Nav.Link>
           <Nav.Link as={Link} to="/register">Register</Nav.Link>  
        </div>
       
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
    
    );
};

export default Header;