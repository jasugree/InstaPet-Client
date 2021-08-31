import React from 'react';
import {Link} from 'react-router-dom';

const Login = (props) => {
    return ( 
        <div>
            <Link to="/register" variant = "body2">
                Not have an account ? Sign up here 
            </Link>
        </div>
     );
}
 
export default Login;