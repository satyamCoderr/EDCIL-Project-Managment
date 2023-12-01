import Showitems from "../ShowItems/Showitems.jsx";
import { useSelector, shallowEqual } from "react-redux";

const HomeComponent = () => {
  const folders = ["New folder", "New folder 2"];
  const files = [
    { data: { name: "New file" } },
    { data: { name: "New file 2" } },
  ];

  const { isLoading, userFolders } = useSelector(
    (state) => ({
      isLoading: state.fileFolders.isLoading,
      userFolders: state.fileFolders.userFolders.filter(
        (userFolder) => userFolder.data.parent=="root"
      ),
    }),
    shallowEqual
  );
  return (
    <div className="col-md-12 w-100">
      {isLoading ? (
        <h3 className="display-1 my-5 text-center">Loading...</h3>
      ) : (
        <>
          <Showitems
            title={"Created Folder"}
            type={"folder"}
            items={userFolders}
          />
          <Showitems title={"Created Files"} type={"file"} items={files} />
        </>
      )}
    </div>
  );
};

export default HomeComponent;
