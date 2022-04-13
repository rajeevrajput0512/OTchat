import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Header.css";
function Header(props = {}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Text className="heading" href="#home">
          OTchat
        </Navbar.Text>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}

export default Header;
