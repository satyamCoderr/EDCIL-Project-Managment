//import React from 'react'
import { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../component/Dashboardcomponents/Navbar/Navbar.jsx";
import SubBar from "../../component/Dashboardcomponents/Subbar/Subbar.jsx";
import HomeComponent from "../../component/Dashboardcomponents/HomeComponent/HomeComponent.jsx";
import CreateFolder from "../../component/Dashboardcomponents/CreateFolder/CreateFolder.jsx";
import FolderComponent from "../../component/Dashboardcomponents/FolderComponent/FolderComponent.jsx";

import {
  getFiles,
  getFolders,
} from "../../redux/actionCreators/fileFoldersActionCreator.js";
import CreateFile from "../../component/Dashboardcomponents/CreateFile/CreateFile.jsx";
import FileComponent from "../../component/Dashboardcomponents/FileComponent/FileComponent.jsx";
import UploadFile from "../../component/Dashboardcomponents/UploadFile/UploadFile.jsx";

const DashboardPage = () => {
  const [isCreatedModalOpen, setIsCreatedModalOpen] = useState(false);
  const [isCreateFileModalOpen, setIsCreateFileModalOpen] = useState(false);
  const [isFileUploadModalOpen, setIsFileUploadModalOpen]= useState(false);
  const [showSubBar, setShowSubBar] = useState(true);
  const { pathname } = useLocation();
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
      dispatch(getFiles(userId));
    }
  }, [userId, isLoading, dispatch]);
  useEffect(() => {
    if (pathname.includes("/file")) {
      setShowSubBar(false);
    }
  }, [pathname]);
  return (
    <>
      {isCreatedModalOpen && (
        <CreateFolder setIsCreatedModalOpen={setIsCreatedModalOpen} />
      )}
      {isCreateFileModalOpen && (
        <CreateFile setIsCreateFileModalOpen={setIsCreateFileModalOpen} />
      )}
      {isFileUploadModalOpen && (
        <UploadFile setIsFileUploadModalOpen={setIsFileUploadModalOpen} />
      )}

      <Navbar />
      {showSubBar && (
        <SubBar
          setIsCreatedModalOpen={setIsCreatedModalOpen}
          setIsCreateFileModalOpen={setIsCreateFileModalOpen}
          setIsFileUploadModalOpen={setIsFileUploadModalOpen}
        />
      )}

      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route path="folder/:folderId" element={<FolderComponent />} />
        <Route path="file/:fileId" element={<FileComponent />} />
      </Routes>
    </>
  );
};
export default DashboardPage;
