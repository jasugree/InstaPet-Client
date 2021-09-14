import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import BrandLogo from "../InstaPet-logo.svg"

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(true)

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
    <div className="wrapper">
    <div className="login-register">
    <img src={BrandLogo} alt="logo" class="auth-logo" style={{width: 300, margin: "auto"}} />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
            required
            type={ toggle == true ? "password" : "text"}/>
            <i className={ toggle == true ? "far fa-eye password-icon" : "far fa-eye-slash password-icon" } onClick={() => setToggle(!toggle)}/>
        </FormGroup>
        <Button id="auth-login" type="submit">Login</Button>
      </Form>
      <p className="auth-toggle">Don't have an account? <Link className="auth-toggle-link" to="/register" variant="body2">Sign up</Link></p>
    </div>
    </div>
  );
};

export default Login;
