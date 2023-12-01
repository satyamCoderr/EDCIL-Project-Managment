//import React from 'react'
import { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Route , Routes ,useNavigate } from "react-router-dom";
import Navbar from "../../component/Dashboardcomponents/Navbar/Navbar.jsx";
import SubBar from "../../component/Dashboardcomponents/Subbar/Subbar.jsx";
import HomeComponent from "../../component/Dashboardcomponents/HomeComponent/HomeComponent.jsx";
import CreateFolder from "../../component/Dashboardcomponents/CreateFolder/CreateFolder.jsx";
import FolderComponent from "../../component/Dashboardcomponents/FolderComponent/FolderComponent.jsx";

import { getFolders } from "../../redux/actionCreators/fileFoldersActionCreator.js";


const DashboardPage = () => {
  const [isCreatedModalOpen, setIsCreatedModalOpen] = useState(false);
  const { isLoggedIn, isLoading, userId } = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isAuthenticated,
      isLoading: state.fileFolders.isLoading,
      userId: state.auth.user.uid,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (isLoading && userId) {
      dispatch(getFolders(userId));
    }
  }, [userId, isLoading, dispatch]);
  return (
    <>
      {isCreatedModalOpen && (
        <CreateFolder setIsCreatedModalOpen={setIsCreatedModalOpen} />
      )}
      <Navbar />
      <SubBar setIsCreatedModalOpen={setIsCreatedModalOpen} />
      <Routes>
      <Route path="" element={<HomeComponent />} />
      <Route path="folder/:folderId" element={<FolderComponent/>} />
      </Routes>
      
    </>
  );
};
export default DashboardPage;
