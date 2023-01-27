
import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXarIt3nX0814diBiC3nNGYjPc6aC8pqc",
  authDomain: "regaleria-vane.firebaseapp.com",
  projectId: "regaleria-vane",
  storageBucket: "regaleria-vane.appspot.com",
  messagingSenderId: "43454472445",
  appId: "1:43454472445:web:25ff4b5091172945f75e94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //FirebaseApp

//obtengo el Firestore de app 
const db = getFirestore(app); // Firestore

//obtengo la coleccion especificada de db
export const productsCollection = collection(db,'productos')  //CollectionReference | query