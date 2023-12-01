import {useParams} from "react-router-dom"
import {shallowEqual , useSelector} from "react-redux";
import Showitems from "../ShowItems/Showitems.jsx";

const FolderComponent = () => {

    const {folderId}=useParams();
    const {currentFolderData, childFolders} = useSelector((state )=>
      ({
        currentFolderData :state.fileFolders.userFolders.find(
          (folder)=>folder.docId === folderId)?.data,
          childFolders :state.fileFolders.userFolders.filter(
            (userFolder)=>userFolder.data.parent === folderId
          ),
        }),
    // shallowEqual
    );
  return (
    <div>
      {
        childFolders.length>0 ?(
          <>
          <Showitems
          title={"Created Folders"}
          type={"folder"}
          items={childFolders}

          />
          
          </>
        ) : (
          <p className="text-center my-5">

            Empty folder
          </p>
        )
      }
     
       </div>
  )
}

export default FolderComponent