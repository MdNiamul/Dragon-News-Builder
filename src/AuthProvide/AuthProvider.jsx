import React, { Children, createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';



// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut =()=>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubScibe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);
        });
        return () => {
            unsubScibe();
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut
    };

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;