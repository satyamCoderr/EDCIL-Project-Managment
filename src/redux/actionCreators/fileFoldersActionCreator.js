import fire from "../../config/firebase.js";
import * as types from "../actionTypes/fileFoldersActionTypes.js";
//actions

const addFolder = (payload) => ({
  type: types.CREATE_FOLDER,
  payload,
});
const addFolders = (payload) => ({
  type: types.ADD_FOLDERS,
  payload,
});
const setLoading = (payload) => ({
  type: types.SET_LOADING,
  payload,
});
const setChangeFolder = (payload) => ({
  type: types.CHANGE_FOLDER,
  payload,
});
//actioncreators

export const createFolder = (data) => (dispatch) => {
  fire
    .firestore()
    .collection("Folders")
    .add(data)
    .then(async (folder) => {
      const folderData = (await folder.get()).data();
      const folderId = folder.id;
      dispatch(addFolder({ data: folderData, docId: folderId }));
      alert("folder created successfully");
    });
};

export const getFolders = (userId) => (dispatch) => {
  dispatch(setLoading(true));
  fire
    .firestore()
    .collection("Folders")
    .where("userId", "==", userId)
    .get()
    .then(async (Folders) => {
      const foldersData = await Folders.docs.map((folder) => ({
        data: folder.data(),
        docId: folder.id,
      }));
      dispatch(addFolders(foldersData));
      dispatch(setLoading(false));
    });
};

export const changeFolders = (folderId) => (dispatch) => {
  dispatch(setChangeFolder(folderId));
};
