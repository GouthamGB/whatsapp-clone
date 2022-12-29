
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCNQGCjDu9zD1xM_tg3ymQGeBDK2qRgG1Q",
    authDomain: "whatsapp-be5bf.firebaseapp.com",
    projectId: "whatsapp-be5bf",
    storageBucket: "whatsapp-be5bf.appspot.com",
    messagingSenderId: "537986142570",
    appId: "1:537986142570:web:2adfafaebd80465adc5513",
    measurementId: "G-FVFWDHSQ26"
  };

  const app = initializeApp(firebaseConfig)


  const auth = getAuth(app)
  const storage = getStorage(app)
 const db = getFirestore(app)

  export { auth, storage,db}