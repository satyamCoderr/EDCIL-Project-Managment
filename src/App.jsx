//import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Login, Register, Homepage, DashboardPage } from "./pages";
import { useDispatch } from "react-redux";
import { checkIsLoggedIn } from "./redux/actionCreators/authActionCreators.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileComponent from "./component/Dashboardcomponents/FileComponent/FileComponent.jsx";
import FolderComponent from "./component/Dashboardcomponents/FolderComponent/FolderComponent.jsx";
import HomeComponent from "./component/Dashboardcomponents/HomeComponent/HomeComponent.jsx";
//import { checkIsLoggedIn } from './redux/actionCreators/authActionCreators';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkIsLoggedIn());
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>

        <Route path="/" index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" >
          <Route index element={<HomeComponent/>} />
          <Route path="dashboard/*" element={<DashboardPage />} />
          <Route path="folder/:folderId" element={<FolderComponent />} />
          <Route path="file/:fileId" element={<FileComponent />} />
        </Route>
        {/* 404 */}
        <Route path="*" element={<>4040 Not Found</>} />
      </Routes>
    </div>
  );
};

export default App;
