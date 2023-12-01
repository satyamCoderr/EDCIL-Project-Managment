import * as types from "../actionTypes/authActions";
import fire from "../../config/firebase"

const loginuser =(payload) =>{
    
   return{
    type: types.SIGN_IN,
      payload,
   };
};
const logoutUser =() =>{
    return{
     type: types.SIGN_OUT,
       
    }
 };

export const signInuser =(email, password , setSuccess)=>(dispatch)=>{
    fire.auth().signInWithEmailAndPassword(email, password).then(user=>{
        dispatch(loginuser({uid :user.user.uid , email:user.user.email, displayName :user.user.displayName}));
        setSuccess(true);

    }).catch(error=>{
        alert("Invalid Email or Password");
    });
};

export const signUpUser =(name , email, password, setSuccess )=>(dispatch)=>{
   fire.auth().createUserWithEmailAndPassword(email , password).then((user)=>{
      fire.auth().currentUser.updateProfile({
        displayName:name,
      }).then(()=>{
          const currentUser= fire.auth().currentUser;
          dispatch(loginuser({uid: currentUser.uid ,
            name: currentUser.displayName ,
             email:currentUser.email,
              })
              );
              setSuccess(true);
      }).catch((error)=>{
           console.log(error);
      })
   }).catch((error)=>{
        if(error.code == "auth/email-already-in-use"){
            alert("email already in use");
        }
        if(error.code == "auth/invalid-email"){
            alert("Invalid email");
        }
        if(error.code == "auth/weak-password"){
            alert("weak password");
        }

   });
};

export const signOutUser =()=>(dispatch)=>{
    fire.auth().signOut().then(()=>{
        dispatch(logoutUser());
    })
    
};

export const checkIsLoggedIn =()=>(dispatch)=>{
   fire.auth().onAuthStateChanged((user)=>{
    if(user){
        dispatch(
        loginuser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
        })

        )
    }
   });
};