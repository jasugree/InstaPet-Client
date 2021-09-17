import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import UploadingProfile from "../posts/UploadingProfile";
import BrandLogo from "../InstaPet-logo.svg"

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImage, setprofileImage] = useState('');
  const [userName, setUserName] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hey there brother");
    fetch("http://localhost:3001/user/create", {
      //1
      method: "POST",
      body: JSON.stringify({
        user: {
          userName: userName,
          profileImage: profileImage,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        history.push("/home");
        props.updateToken(data.sessionToken);
      });
  };

  return (
    <div className="wrapper">
    <div className="login-register">
      <img src={BrandLogo} alt="logo" class="auth-logo" style={{width: 300, margin: "auto"}} />
      <p className="register-intro">Sign up to see photos from your friends and their pets.</p>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
              <UploadingProfile setprofileImage={setprofileImage} profileImage={profileImage} />
        </FormGroup>
        <FormGroup>
          <Input
            onChange={(e) => setUserName(e.target.value)}
            name="firstName"
            placeholder="Username"
            value={userName} required
          />
        </FormGroup>
        <FormGroup>
          <Input
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            placeholder="First Name"
            value={firstName} required
          />
        </FormGroup>
        <FormGroup>
          <Input
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            placeholder="Last Name"
            value={lastName} required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Email"
            value={email} required
          />
        </FormGroup>
        <FormGroup>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
            value={password} required
          />
        </FormGroup>
        <Button id="auth-login" type="submit" style={{marginTop: "5%"}}>Signup</Button>
      </Form>
      <p className="auth-toggle">Already have an account? <Link  className="auth-toggle-link" to="/" variant="body2">Sign in here</Link>
      </p>
    </div>
    </div>
  );
};

export default Register;
