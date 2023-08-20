import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="/" className="nav-title">
        Acknowledging Our Lands
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="custom-navbar-collapse">
        <Nav className="ml-auto custom-nav">
          <Nav.Link className="nav-link" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="nav-link" href="/location">
            Land Acknowledgment
          </Nav.Link>
          <Nav.Link className="nav-link" href="/search">
            Search
          </Nav.Link>
          <Nav.Link className="nav-link" href="/learn-more">
            Learn More
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
