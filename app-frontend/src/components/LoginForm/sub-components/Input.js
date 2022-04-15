import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Input.css";

const Input =  ({onSubmit}) => {
  const [username, setUsername] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="phone">
          <Form.Label>Username </Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
        </Form.Group>
        <Button style={{ marginTop: "10px" }} block size="lg" type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Input;