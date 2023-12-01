import * as types from "../actionTypes/authActions.js";

const initialState ={
    isAuthenticated : false,
    user : {},
};

const authreducer = (state=initialState , action)=>{
    switch(action.type){
        case types.SIGN_IN:
            return{
                ...state,
                isAuthenticated:true,
                user : action.payload,
            }
        case types.SIGN_OUT:
            return{
                ...state,
                isAuthenticated:false,
                user : {},
            }
        default:
            return state;
    };
};
export default authreducer;