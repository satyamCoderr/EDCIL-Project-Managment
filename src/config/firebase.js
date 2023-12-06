import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"
import "firebase/compat/storage"
const firebaseConfig = {
    apiKey: "AIzaSyBErpoEOtTid_7exMkZhjIZy-cSbHGQLDg",
    authDomain: "filemanagementsystem-edcil.firebaseapp.com",
    projectId: "filemanagementsystem-edcil",
    storageBucket: "filemanagementsystem-edcil.appspot.com",
    messagingSenderId: "801711844432",
    appId: "1:801711844432:web:09dd433b838d7526497555",
    measurementId: "G-NT5JHNZZB7"
  };

  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;
