import React from 'react';
import {Link} from 'react-router-dom';

const Register = (props) => {
    return ( 
        <div>
            <Link to="/" variant = "body2">
                Already have an account ? Sign in here 
            </Link>
        </div>
     );
}
 
export default Register;