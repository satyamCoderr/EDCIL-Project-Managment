import React from "react";

import PDFViewer from "pdf-viewer-reactjs";

const MyPDFViewer = ({ url }) => {
  return (
    <div>
      <h1>PDF Viewer</h1>
      <iframe
        title="PDF Viewer"
        src={url}
        width="100%"
        height="500px"
      ></iframe>
    </div>
  );
};

export default MyPDFViewer;
// https://firebasestorage.googleapis.com/v0/b/filemanagementsystem-edcil.appspot.com/o/files%2FCcLTwN9HU3ZfbEviLTidr62IGiC3%2FDT20223110337_Application%20(1).pdf?alt=media&token=8554ba8d-3af8-44e7-b277-75ce85ba84c9
