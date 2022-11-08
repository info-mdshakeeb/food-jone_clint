import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from "../Config/Firebase.init";
import AlartMessage from '../Hook/AlartMessage';


export const authUser = createContext();
const auth = getAuth(app);
const { successMessage } = AlartMessage();
const Provider = new GoogleAuthProvider()


const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true);

    //login & signUp :
    const createUser = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
    const loginWithEmail = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
    const logutOut = () => signOut(auth).then(re => successMessage('Logut Successfull'))
    const googlelogin = () => signInWithPopup(auth, Provider);
    const varifymail = () => sendEmailVerification(auth.currentUser);
    //Update user information :
    const setUserNAme = (name, url) => updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: url
    })

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsuscribe();
        }
    }, [])

    const authInfo = {
        user, setUser,
        loading, setloading, setUserNAme,
        googlelogin, createUser, loginWithEmail, logutOut,
        varifymail,
    }

    return (
        <authUser.Provider value={authInfo}>
            {children}
        </authUser.Provider>
    );
};

export default UserContext;