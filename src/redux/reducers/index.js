import authreducer from "./authreducer";
import { combineReducers } from "redux";
import filefolderReducer from "./filefolderReducer.js";
const rootReducer =  combineReducers({auth:authreducer , fileFolders : filefolderReducer})
export default rootReducer;