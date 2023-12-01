import * as types from "../actionTypes/fileFoldersActionTypes.js";

const initialState = {
  isLoading: true,
  currentFolder: "root",
  userFolders: [],
  userFiles: [],
  adminFiles: [],
};

const filefolderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_FOLDER:
      return {
        ...state,
        userFolders: [...state.userFolders, action.payload],
      };
    case types.ADD_FOLDERS:
      return {
        ...state,
        userFolders: action.payload,
      };
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.CHANGE_FOLDER:
      return {
        ...state,
        currentFolder: action.payload,
      };
    default:
      return state;
  }
};

export default filefolderReducer;
