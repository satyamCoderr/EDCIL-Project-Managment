import { useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import Showitems from "../ShowItems/Showitems.jsx";

const FolderComponent = () => {
  const { folderId } = useParams();
  const { currentFolderData, childFolders, childFiles } = useSelector(
    (state) => ({
      currentFolderData: state.fileFolders.userFolders.find(
        (folder) => folder.docId === folderId
      )?.data,
      childFolders: state.fileFolders.userFolders.filter(
        (userFolder) => userFolder.data.parent === folderId
      ),
      childFiles: state.fileFolders.userFiles.filter(
        (file) => file.data.parent === folderId
      ),
    })
    // shallowEqual
  );
  return (
    <div>
      {childFolders.length > 0 ? (
        <>
          {childFolders.length > 0 && (
            <Showitems
              title={"Created Folders"}
              type={"folder"}
              items={childFolders}
            />
          )}
          {childFiles.length > 0 && (
            <Showitems
              title={"Created Files"}
              type={"file"}
              items={childFiles.filter((file) => file.data.url === null)}
            />
          )}
          {childFiles.length > 0 && (
            <Showitems
              title={"Uploaded Files"}
              type={"file"}
              items={childFiles.filter((file) => file.data.data === null)}
            />
          )}
        </>
      ) : (
        <p className="text-center my-5">Empty folder</p>
      )}
    </div>
  );
};

export default FolderComponent;
