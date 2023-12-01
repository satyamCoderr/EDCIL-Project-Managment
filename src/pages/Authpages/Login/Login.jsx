import React from 'react'
import { Loginform } from '../../../component/AuthComponents/Loginform';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container-fluid ">
        <h1 className='display-1 my-5 text-center'>
          Login Here
        </h1>
        <div className='row'>
            <div className='col-md-6 mx-auto mt-5'>
                <Loginform/>
            <Link to="/Register">
              Not a member? Register
            </Link>
            </div>
        </div>
        </div>
    
  );
};
export default Login;