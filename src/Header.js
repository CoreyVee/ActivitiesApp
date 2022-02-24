import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from 'react-router-bootstrap'
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar id="header" bg="dark" variant="dark" sticky="top">
      <Container>
      
        <Navbar.Brand>
        <LinkContainer to="/">
          <img
            src={require("./Images/relax.png")}
            alt=""
            width="35"
            height="35"
            className="d-inline-block align-top"
          />
        </LinkContainer>
        </Navbar.Brand>
      </Container>
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
        <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
        <LinkContainer to="/About">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
export default Header;
