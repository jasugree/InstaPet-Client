import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Register = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/user/register', { //1
            method: 'POST',
            body: JSON.stringify({user: {username: username, password: password}}),
            headers: new Headers({
                'Content-Type':'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return ( 
        <div className="login-register">
            <h2>This is the Register</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)}  name="password" value={password} />
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
            <Link to="/" variant = "body2">
                Already have an account ? Sign in here 
            </Link>
        </div>
     );
}
 
export default Register;