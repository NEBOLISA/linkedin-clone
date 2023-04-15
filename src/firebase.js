import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALMjQUg16-TlcVK0Wwlzt2snAx8ZIzWDE",
  authDomain: "linkedin-clone-ef753.firebaseapp.com",
  projectId: "linkedin-clone-ef753",
  storageBucket: "linkedin-clone-ef753.appspot.com",
  messagingSenderId: "163403407821",
  appId: "1:163403407821:web:f80a7f8ef95f8d851da484",
};
export const firebaseApp = initializeApp(firebaseConfig);

//export const auth = firebaseApp.auth();
export const firestore = getFirestore(firebaseApp);
export const db = getFirestore(firebaseApp);
