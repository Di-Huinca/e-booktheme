import {useContext, createContext, useEffect, useState} from 'react';
import {
    signInWithRedirect,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from '../firebase/firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const googleSignIn = ()  => {
        const googleProvider = new GoogleAuthProvider();
        signInWithRedirect(auth, googleProvider)

    };

    const logOut = () =>{
        signOut(auth)
    };

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        };
    },[])

    return(
        <AuthContext.Provider value={{googleSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext (AuthContext);
};
