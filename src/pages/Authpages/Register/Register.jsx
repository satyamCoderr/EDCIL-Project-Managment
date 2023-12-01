import React from 'react'
import { Link } from 'react-router-dom'
import { Registerform } from '../../../component/AuthComponents/Registerform'

 const Register = () => {
  return (
    <div className="container-fluid ">
        <h1 className='display-1 my-5 text-center'>
          Register Here
        </h1>
        <div className='row'>
            <div className='col-md-6 mx-auto mt-5'>
                <Registerform/>
            <Link to="/Login">
              Already a member? Login
            </Link>
            </div>
        </div>
        </div>
  )
}
export default Register;