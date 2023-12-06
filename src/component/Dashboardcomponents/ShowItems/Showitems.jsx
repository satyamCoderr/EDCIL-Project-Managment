import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Showitems.css";
import { faFileAlt, faFolder } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeFolders } from "../../../redux/actionCreators/fileFoldersActionCreator";
//import { faFile } from "@fortawesome/free-solid-svg-icons";
//import FolderComponent from "../FolderComponent/FolderComponent.jsx";

const Showitems = ({ title, items, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDblClick = (itemId) => {
    if (type == "folder") {
      dispatch(changeFolders(itemId));

      navigate(`/dashboard/folder/${itemId}`);
    } else {
      navigate(`/dashboard/file/${itemId}`);
    }
  };

  return (
    <div className="w-100">
      <h4 className="text-center border-bottom py-2">{title}</h4>
      <div className="row gap-2 p-4 flex-wrap">
        {items?.map((item, index) => {
          return (
            <p
              key={index * 55}
              className="col-md-2 py-3 d-flex flex-column text-center border"
              onDoubleClick={() => handleDblClick(item.docId)}
            >
              {type == "folder" ? (
                <FontAwesomeIcon icon={faFolder} size="4x" className="mb-3" />
              ) : (
                <FontAwesomeIcon icon={faFileAlt} size="4x" className="mb-3" />
              )}
              {item?.data?.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Showitems;
