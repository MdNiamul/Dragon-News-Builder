import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';



// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// eslint-disable-next-line
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]  = useState(true);

    // console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
       
    }

    useEffect(() => {
        const unsubScibe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);
            setLoading(false);
        });
        return () => {
            unsubScibe();
        }
    }, [])

    // const authData = {
    //     user,
    //     setUser,
    //     createUser,
    //     logOut,
    //     signIn
    // };

    // return <AuthContext value={authData}>{children}</AuthContext>

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
