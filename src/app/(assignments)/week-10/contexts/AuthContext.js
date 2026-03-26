"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "@/app/utils/firebase";

const AuthContext = createContext(); //1. create context obj

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const gitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const handleSignInClick = async () => {
    try {
      await gitHubSignIn();
      console.log("login successfully.");
    } catch (error) {
      console.error("login failed:", error.message);
    }
  };

  const firebaseSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    //2. loaded all data need to be boardcast
    <AuthContext.Provider value={{ user, handleSignInClick, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

//provide use context handler
export const useUserAuth = () => {
  return useContext(AuthContext);
};
