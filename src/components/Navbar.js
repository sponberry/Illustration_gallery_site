import React from "react"
import { Navbar, Nav } from "react-bootstrap"

import "../styles/Navbar.css"

const NavBar = () => (
  <Navbar collapseOnSelect expand="false" bg="none" fixed="top">
    <Navbar.Brand href="#home" className="page-title">abigailillustration</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="dropdown-btn"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="text-lg-right text-center">
        <Nav.Link href="#gallery" className="menu-links">Gallery</Nav.Link>
        <Nav.Link eventKey={2} href="#about" className="menu-links">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBar