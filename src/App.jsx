import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Login from './auth/Login'
import Register from './auth/Register';
import {
	BrowserRouter as Router,
	Route
  } from "react-router-dom";

function App() {

	const [sessionToken, setSessionToken] = useState('');

	useEffect(() => {
		if(localStorage.getItem('token')){
			setSessionToken(localStorage.getItem('token'))
		}
	}, [])

	const updateToken =(newToken) => {
		localStorage.setItem('token', newToken);
		setSessionToken(newToken);
		console.log("This is the session token ====>" + sessionToken);
	}

	return (
		<div className="App">
			<h1>Hello InstaPet</h1>
			<Router>
			<Route exact path = "/"><Login updateToken={updateToken}/></Route>
			<Route exact path = "/register"><Register updateToken={updateToken}/></Route>

			</Router>
         			
		</div>
	);
}

export default App;
