import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCUTrC0a8RJDXGa-3NjCEC-RhQm1x13zFM",
  authDomain: "crud-91676.firebaseapp.com",
  projectId: "crud-91676",
  storageBucket: "crud-91676.appspot.com",
  messagingSenderId: "321772199018",
  appId: "1:321772199018:web:844808f8a7971c3b717e13",
  measurementId: "G-LH42049SWJ"
};
const analytics = getAnalytics(app);
const auth = getAuth();
export {analytics,auth}