import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';//apunta ala carpeta de doc y col
import 'firebase/auth';


//objeto de confing 
const firebaseConfig = {
  apiKey: "AIzaSyB84zpYI9mVcZRzrbxe-jvz7IG9B7nxY4M",
  authDomain: "fir-react-shop-eb6fd.firebaseapp.com",
  projectId: "fir-react-shop-eb6fd",
  storageBucket: "fir-react-shop-eb6fd.appspot.com",
  messagingSenderId: "1077887616204",
  appId: "1:1077887616204:web:98e9fcab68b02688422e69",
  measurementId: "G-R9M5BEHDXT"
};

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 //2 param que siempre vienen
 export const createUserProfileDocument = async (userAuth, ...aditionalData) =>  {
   if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`)

   const snapshot = await useRef.get()//obtener ref de user > obtiene una estructura de docu si existe o no

   if(!snapshot.exist) {
      //si no existe vamos a creart un context para el user
      const { displayName, email} = userAuth;//datos de user autenticado
      const createAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData

        });
      } catch(error) {
        console.log('error creating user', error.message)
      }
   }
   
   return userRef;
 };

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();
 
 const provider = new firebase.auth.GoogleAuhProvider();// new isntacia de autentificación firebase
 provider.setCustomParameters({ prompt: 'select_acount'});

 export const signInWithGoogle = () => auth.signInWithPoup(provider);//te devuelve un pop con el proveedor


 export default firebase;
