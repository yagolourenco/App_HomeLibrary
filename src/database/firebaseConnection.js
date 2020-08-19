import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyA5yQnCvdmvN20XDhzNmxRxWFSguXiMG7A",
    authDomain: "mobile-6b5d5.firebaseapp.com",
    databaseURL: "https://mobile-6b5d5.firebaseio.com",
    projectId: "mobile-6b5d5",
    storageBucket: "mobile-6b5d5.appspot.com",
    messagingSenderId: "217521830500",
    appId: "1:217521830500:web:0d1a3ac2337459cc933d71",
    measurementId: "G-QK8ETQE8H3"
  };

  
  if(!firebase.apps.length){
      //Se nao estiver aberta, abre a conexao
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;