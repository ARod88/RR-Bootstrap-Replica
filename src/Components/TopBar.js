import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function TopBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
          <img alt="Instacart Logo" src="./instacart.png" width="130" height="30" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"> {/* Use "ml-auto" class to push the items to the right */}
            <Nav.Link className='Log-In' href="#LogIn">Log In</Nav.Link>
            <Button className='Sign-Up' variant="success">Sign Up</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
