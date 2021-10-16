import firebaseConfig from "./firebase.config";
import {initializeApp} from 'firebase/app'


const initializAuthintication=()=>{
    initializeApp(firebaseConfig);
};



export default initializAuthintication;


