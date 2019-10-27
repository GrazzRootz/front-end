import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import Navbar from 'react-bootstrap/Navbar';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    const isAuthenticated = true;
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar bg="success" variant="dark">
      <Nav className="mr-auto">
        <IndexLinkContainer to="/">
          <Navbar.Brand>GrazzRootz</Navbar.Brand>
        </IndexLinkContainer>
      { isAuthenticated ? 
      <>
        <LinkContainer to="/garden-api">
          <Nav.Link>Gardens</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/events">
          <Nav.Link>Events</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/nearby-polls">
          <Nav.Link>Community Questions</Nav.Link>
        </LinkContainer>


      </>:
      ""
      }
      </Nav>
      {
          isAuthenticated && <Nav className="ml-auto">
              <LinkContainer to="/profile">
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
              <Nav.Link onClick={() => logout()}>Log Out</Nav.Link>
      </Nav>
      }
    </Navbar>
  );
};

export default NavBar;
