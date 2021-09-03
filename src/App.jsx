import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Auth from "./auth/Auth"
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
		console.log(sessionToken);
	}

	return (
		<div className="App">
			<h1>Hello InstaPet</h1>
			<Router>
			<Route exact path = "/"><Auth updateToken={updateToken}/></Route>
			</Router>
         			
		</div>
	);
}

export default App;
