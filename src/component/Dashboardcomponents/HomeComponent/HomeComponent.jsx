import Showitems from "../ShowItems/Showitems.jsx";
import { useSelector, shallowEqual } from "react-redux";

const HomeComponent = () => {
  // const { isLoading, userFolders, userFiles } = useSelector(
  //   (state) => ({
  //     isLoading: state.fileFolders.isLoading,
  //     userFolders: state.fileFolders.userFolders.filter(
  //       (userFolder) => userFolder.data.parent == "root"
  //     ),
  //     userFiles: state.fileFolders.userFiles.filter(
  //       (file) => file.data.parent === "root"
  //     ),
  //   }),
  //   shallowEqual
  // );
  const fileFolders = useSelector( (state) =>  state.fileFolders,shallowEqual);
  const isLoading = fileFolders.isLoading;
  const userFolders = fileFolders.userFolders.filter(
    (userFolder) => userFolder.data.parent == "root"
  );
  const userFiles = fileFolders.userFiles.filter((file) => file.data.parent === "root");
  return (
    <div className="col-md-12 w-100 bg-white">
      {isLoading ? (
        <h3 className="display-1 my-5 text-center">Loading...</h3>
      ) : (
        <>
          <Showitems
            title={"Created Folder"}
            type={"folder"}
            items={userFolders}
          />
          <Showitems
            title={"Created Files"}
            type={"file"}
            items={userFiles.filter((file) => file.data.url == null)}
          />
          <Showitems
            title={"Uploaded Files"}
            type={"file"}
            items={userFiles.filter((file) => file.data.data == null)}
          />
        </>
      )}
    </div>
  );
};

export default HomeComponent;
