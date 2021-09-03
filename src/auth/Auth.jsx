import React from 'react';
import Login from './Login';
import Register from './Register';
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";

const Auth = (props) => {
    return ( 
        <Router>
        <Switch>
          <Route exact path = "/"><Login updateToken={props.updateToken}/></Route>
          <Route path = "/register"><Register updateToken={props.updateToken}/></Route>
        </Switch>
    </Router>
     );
}
 
export default Auth;