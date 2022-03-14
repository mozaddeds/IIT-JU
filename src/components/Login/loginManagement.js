import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebaseConfig';


export const initializeFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
}


export const handleGoogleSignIn = () => {

    var googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    signInWithPopup(auth, googleProvider)
        .then((result) => {
            var { displayName, email, success, isFieldValid, isSignedIn } = result.user;

            const user = {
                isSignedIn: true,
                name: displayName,
                email: email,
                success: true,
                isFieldValid: true
            };
            return user;

            console.log(result.user);

        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });

}