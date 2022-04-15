import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Header.css";
function Header({name}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Text className="heading" href="#home">
          OTchat
        </Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Signed in as: {name}</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
