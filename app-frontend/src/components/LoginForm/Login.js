import React from "react";
import Input from "./sub-components/Input";
import Header from "./sub-components/Header";
import Footer from "./sub-components/Footer";

const Login = ({ onSubmit }) => {
  const name = "unknown";
  return (
    <div>
      <Header name={name}/>
      <Input onSubmit={onSubmit} />
      <Footer />
    </div>
  );
}

export default Login;