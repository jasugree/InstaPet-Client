import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/user/login", {
      //1
      method: "POST",
      body: JSON.stringify({ user: { email: email, password: password } }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      }); //ADD CATCH
  };

  return (
    <div className="login-register">
      <h2>This is the Login</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
      <Link to="/register" variant="body2">
        Not have an account ? Sign up here
      </Link>
    </div>
  );
};

export default Login;
