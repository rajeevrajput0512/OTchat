import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="phone">
          <Form.Label>Phone </Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={phone}
            pattern="[0-9]{10}"
            title="Enter a valid phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            value={password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button style={{ marginTop: "10px" }} block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
