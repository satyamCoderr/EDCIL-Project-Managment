import React from "react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { signOutUser } from "../redux/actionCreators/authActionCreators.js";

const NavigationComponent = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch=useDispatch();

  return (
    <nav className="navbar navbar-expand-ig navbar-dark bg-dark">
      <Link className="navbar-brand ms-5" href="/">
        EDCIL PROJECT MANAGMENT SYSTEM
      </Link>
      <ul className="navbar-nav ms-auto me-5">
        {isAuthenticated ? (
          <>
          <li className="nav-item "> 
           <p className="my-0 mt-1 mx-2 flex-row ">
             <span className="text-light">Welcome,</span>
             <span className="text-warning">{user.displayName}</span>
           </p>
          </li>
            <li className="nav-item ">
              <Link className=" btn  btn-primary btn-sm mx-2" to="/dashboard">
                Dashboard
              </Link>
              <button className=" btn btn-success btn-sm" onClick={()=>dispatch(signOutUser())}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item ">
              <Link className=" btn  btn-primary btn-sm mx-2" to="/login">
                Login
              </Link>
              <Link className=" btn btn-success btn-sm" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavigationComponent;
