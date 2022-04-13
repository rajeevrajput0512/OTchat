import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Input.css";

const Input =  ({onSubmit}) => {
  const [phone, setPhone] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(phone);
  };

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
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
        </Form.Group>
        <Button style={{ marginTop: "10px" }} block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Input;