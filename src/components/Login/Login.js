import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebaseConfig';


const initializeFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
}

initializeFirebase();

const Login = () => {

    const history = useHistory();
    const location = useLocation();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const googleSignIn = () => {
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
                console.log(user);
                setLoggedInUser(user);

                history.push("/home");

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }



    // let { from } = { pathname: "/home" } ;

    return (
        <div className="loginField">
            <h1>User LogIn</h1>
            <button onClick={googleSignIn} className="btn btn-warning btn-lg mt-5">Sign In With GOOGLE</button>
        </div>
    );
};

export default Login;