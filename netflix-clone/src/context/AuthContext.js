import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, } from "firebase/firestore";


const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (userAccount) => {
      if (userAccount) {
        setUser(userAccount);
      } else {
        setUser(null);
      }
    });

    return () => setUser(null);
  }, []);



  function signUpHandler(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  }

  function signInHandler(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signOutHandler() {
    return signOut(auth);
  }

 

  return (
    <AuthContext.Provider
      value={{ user, signUpHandler, signInHandler, signOutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
