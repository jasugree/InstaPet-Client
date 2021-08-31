import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<h1>Hello InstaPet</h1>
			<Router>
       			<Switch>
         			<Route exact path = "/"><Login/></Route>
         			<Route path = "/register"><Register/></Route>
       			</Switch>
   			</Router>
		</div>
	);
}

export default App;
