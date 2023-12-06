import Header from "./Header.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import CodeEditor from "./CodeEditor.jsx";
import { useState, useEffect } from "react";
const FileComponent = () => {
  const { fileId } = useParams();
  const navigate = useNavigate();
  const [fileData, setFileData] = useState("");
  const [prevFileData, setPrevFileData] = useState("");

  const { currentFile } = useSelector(
    (state) => ({
      currentFile: state.fileFolders.userFiles.find(
        (file) => file.docId === fileId
      ),
    }),
    shallowEqual
  );

  useEffect(() => {
    if (currentFile) {
      setFileData(currentFile?.data?.data);
      setPrevFileData(currentFile?.data?.data);
    }
  }, [currentFile, currentFile?.data?.data]);

  return (
    <div>
      {fileData != null ? (
        <>
          <Header
            fileName={currentFile?.data?.name}
            fileData={fileData}
            prevFileData={prevFileData}
            fileId={fileId}
          />

          <CodeEditor
            fileName={currentFile?.data?.name}
            data={fileData}
            setData={setFileData}
          />
        </>
      ) : (
        <>
          <h1 className="display-1 my-5 text-center">
            uploaded files preview coming soon
          </h1>

          <button
            className="btn btn-primary ms-auto"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </>
      )}
    </div>
  );
};

export default FileComponent;
