import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {LinkContainer} from 'react-router-bootstrap'

const Footer = () => {
  return (
    <Navbar id='footer' bg="dark" variant="dark" fixed="bottom">
      <Container>
        <h4 className="signature">Designed by CoreyV</h4>
      </Container>
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
        <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
export default Footer;
