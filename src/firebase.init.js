// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.messagingSenderId,
  appId:process.env.REACT_APP_appId

  // apiKey: "AIzaSyCl321A84Rg9y27-ram1UB_vpx5-8nSkYU",
  // authDomain: "warehouse-management-7a76b.firebaseapp.com",
  // projectId: "warehouse-management-7a76b",
  // storageBucket: "warehouse-management-7a76b.appspot.com",
  // messagingSenderId: "728341461765",
  // appId: "1:728341461765:web:acaf4d20843797515b556c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
