import "./SubBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faFileUpload,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import { changeFolders } from "../../../redux/actionCreators/fileFoldersActionCreator.js";

const SubBar = ({ setIsCreatedModalOpen, setIsCreateFileModalOpen , setIsFileUploadModalOpen}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentFolder, currentFolderData, userFolders } = useSelector(
    (state) => ({
      currentFolder: state?.fileFolders?.currentFolder,
      currentFolderData: state?.fileFolders?.userFolders?.find(
        (userFolder) => userFolder.docId === state.fileFolders.currentFolder
      ),
      userFolders: state?.fileFolders?.userFolders,
    }),
    shallowEqual
  );

  const handleNavigate = (link, id) => {
    navigate(link);
    dispatch(changeFolders(id));
  };
  return (
    <nav className="navbar navbar-expand-ig mt-2 navbar-light bg-white py-2  ">
      <nav className="ms-5" aria-label="breadcrumb">
        <ol className="breadcrumb d-flex align-items-center">
          {currentFolder != "root" ? (
            <>
              <button
                onClick={() => handleNavigate("/dashboard", "root")}
                className="breadcrump-item btn btn-link text-decoration-none "
              >
                Root/
              </button>
              {currentFolderData?.data.path.map((folder, index) => (
                <button
                  key={index}
                  className="breadcrump-item btn btn-link "
                  onClick={() =>
                    handleNavigate(
                      `/dashboard/folder/${
                        userFolders.find(
                          (userFolder) => folder == userFolder.docId
                        ).docId
                      }`,
                      userFolders.find(
                        (userFolder) => folder == userFolder.docId
                      ).docId
                    )
                  }
                >
                  {
                    userFolders.find((userFolder) => folder == userFolder.docId)
                      .data.name
                  }/
                </button>
              ))}
              <li className="breadcrump-item active">
                {currentFolderData?.data.name}
              </li>
            </>
          ) : (
            <>
              <li className="breadcrump-item active"> Root</li>
            </>
          )}
        </ol>
      </nav>

      <ul className="navbar-nav ms-auto flex-row me-5">
        <li className="nav-item ">
          <button className="btn btn-outline-dark mx-2"
            onClick={()=>setIsFileUploadModalOpen(true)}
            >
            <FontAwesomeIcon icon={faFileUpload} /> &nbsp; Upload Files
          </button>
        </li>
        <li className="nav-item  mx-2">
          <button
            className="btn btn-outline-dark "
            onClick={() => setIsCreateFileModalOpen(true)}
          >
            <FontAwesomeIcon icon={faFileAlt} /> &nbsp; Create Files
          </button>
        </li>
        <li className="nav-item ms-2 ">
          <button
            className="btn btn-outline-dark "
            onClick={() => setIsCreatedModalOpen(true)}
          >
            <FontAwesomeIcon icon={faFolderPlus} /> &nbsp; Create Folder
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SubBar;
