import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null); 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();




const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Corrected the state name

    // register part
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // logIn 
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword( auth, email, password);
    }

    // user management with observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    // logout 
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        loading,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
