import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBRWtrR2jsl7t7SesQKlI8jsPiB1erNBa0",
    authDomain: "mydairy-44d37.firebaseapp.com",
    projectId: "mydairy-44d37",
    storageBucket: "mydairy-44d37.appspot.com",
    messagingSenderId: "122983847460",
    appId: "1:122983847460:web:61947c8ba5f4a5918caab1"
};

// firebase 를 초기화합니다.
const app = initializeApp(firebaseConfig);
//  firestore를 초기화합니다.
const appFireStore = getFirestore(app);
// 인증을 초기화 합니다.
const appAuth = getAuth();

export { appFireStore, appAuth }