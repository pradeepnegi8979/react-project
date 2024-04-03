import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import HeaderLogo from "../img/iffort.tech.png";
import { LinkContainer } from "react-router-bootstrap";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={HeaderLogo} alt="logo" className="header_logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="ml-auto">
            <LinkContainer to="/services">
              <Nav.Link>Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/case-study">
              <Nav.Link>Case study</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about-us">
              <Nav.Link>About us </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blogs">
              <Nav.Link>Blog </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Header };
