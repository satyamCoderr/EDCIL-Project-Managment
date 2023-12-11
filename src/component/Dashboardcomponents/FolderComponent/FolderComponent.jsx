import { useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import Showitems from "../ShowItems/Showitems.jsx";
import { Axios } from "axios";


const FolderComponent = () => {
  const { folderId } = useParams();
  const { currentFolderData, childFolders, childFiles, myFolders } =
    useSelector(
      (state) => ({
        myFolders: state.fileFolders.userFiles,
        currentFolderData: state.fileFolders.userFolders.find(
          (folder) => folder?.docId === folderId
        )?.data,
        childFolders: state.fileFolders.userFolders.filter(
          (userFolder) => userFolder?.data.parent === folderId
        ),
        childFiles: state.fileFolders.userFiles.filter(
          (file) => file?.data.parent === folderId
        ),
      }),
      shallowEqual
    );

  const createdFiles =
    childFiles && childFiles.filter((file) => file?.data?.url == null);
  const UploadedFiles =
    childFiles && childFiles.filter((file) => file?.data.parent == folderId);
  // const estFile= myFolders.filter((file) => file?.data.parent == folderId)
  //console.log(childFolders, UploadedFiles);
  return (
    <div>
      {/* <Showitems
              title={"Uploaded Files"}
              type={"file"}
              items={estFile}
            /> */}
      {childFiles.length > 0 ? (
        <>
          {childFolders.length > 0 && (
            <Showitems
              title={"Created Folders"}
              type={"folder"}
              items={childFolders}
            />
          )}
          {createdFiles && createdFiles.length > 0 && (
            <Showitems
              title={"Created Files"}
              type={"file"}
              items={createdFiles}
            />
          )}

          {UploadedFiles && UploadedFiles.length > 0 && (
            <Showitems
              title={"Uploaded Files"}
              type={"file"}
              items={UploadedFiles}
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
