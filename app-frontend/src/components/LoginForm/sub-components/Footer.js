import React from "react";
import { Card } from "react-bootstrap";
import "./Header.css";
const pp = {
  position: "fixed",
  bottom: "0",
  width: "100%",
  textAlign: "center",
};

const Footer = () => {
  return (
    <Card style={pp} className="text-muted ">
      <Card.Footer className="text-muted">
        Made by Rajeev and Deeksha
      </Card.Footer>
    </Card>
  );
};
export default Footer;
