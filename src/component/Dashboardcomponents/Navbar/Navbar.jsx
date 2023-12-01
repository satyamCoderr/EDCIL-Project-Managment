//import React from "react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { signOutUser } from "../../../redux/actionCreators/authActionCreators.js";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch=useDispatch();

  return (
    <nav className="navbar navbar-expand-ig navbar-light bg-white shadow-sm p-3">
      <Link className="navbar-brand ms-5" to="/">
        EDCIL PROJECT MANAGMENT SYSTEM
      </Link>
      <ul className="navbar-nav ms-auto me-5">
        {isAuthenticated ? (
          <>
          <li className="nav-item"> 
           <p className="my-0 mt-2 mx-2">
             <span className="text-dark">Welcome,</span>
             <span className="fw-bold">{user.displayName}</span>
           </p>
          </li>
            <li className="nav-item ">
              <Link className=" btn  btn-primary btn-sm mx-2" to="/">
               Home
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

export default Navbar;
