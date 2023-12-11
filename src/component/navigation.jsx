import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUser } from "../redux/actionCreators/authActionCreators.js";

const NavigationComponent = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleUserLogout = () => {    
    dispatch(signOutUser());   
    if (!isAuthenticated) return navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-ig shadow-sm">
      <Link className="navbar-brand ms-5" href="/">
        <img src="https://www.edcilindia.co.in/images/EdCIL.png" alt="logo" />
      </Link>
      <ul className="navbar-nav ms-auto me-5 flex-row">
        {isAuthenticated ? (
          <>
            <li className="nav-item bg-secondary rounded-2">
              <p className="my-0 mt-1 mx-2 text-white">
                <span className="">Welcome, </span>
                <span className="">{user.displayName}</span>
              </p>
            </li>
            <li className="nav-item ">
              <Link className=" btn  btn-primary btn-sm mx-2" to="/dashboard">
                Dashboard
              </Link>
              <button
                className=" btn btn-success btn-sm"
                onClick={handleUserLogout}
              >
                Logout
              </button>
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
