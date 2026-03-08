import React, { Children, createContext, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';



// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authData = {
        user,
        setUser,
        createUser,
    };

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;