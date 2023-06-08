import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: ,
    authDomain: ,
    projectId: ,
    storageBucket: ,
    messagingSenderId: ,
    appId: 
};

// firebase 를 초기화합니다.
const app = initializeApp(firebaseConfig);
//  firestore를 초기화합니다.
const appFireStore = getFirestore(app);
// 인증을 초기화 합니다.
const appAuth = getAuth();

export { appFireStore, appAuth }