import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import UploadingProfile from "../posts/UploadingProfile";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImage, setprofileImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hey there brother");
    fetch("http://localhost:3001/user/create", {
      //1
      method: "POST",
      body: JSON.stringify({
        user: {
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
        props.updateToken(data.sessionToken);
      });
  };

  return (
    <div className="login-register">
      <h2>This is the Register</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <UploadingProfile
            setprofileImage={setprofileImage}
            profileImage={profileImage}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            value={firstName}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            value={lastName}
          />
        </FormGroup>
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
        <Button type="submit">Signup</Button>
      </Form>
      <Link to="/" variant="body2">
        Already have an account ? Sign in here
      </Link>
    </div>
  );
};

export default Register;
