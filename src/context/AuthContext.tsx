import React, { useState, useEffect, useContext, ReactNode, createContext } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

interface Props {
  children?: ReactNode
}

export const authContext = createContext({});

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("error creating auth context");
  }
  return context;
};

export function AuthProvider({ children } : Props) {
  const [user, setUser] = useState<User|string>("");
  useEffect(() => {
    const subscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setUser("");
      } else {
        setUser(currentUser);
      }
    });
    return () => subscribed();
  }, []);

  const register = async (email: string, password: string) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  const login = async (email: string, password: string) => {
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
    }catch{
      logout()
    }
  };

  const loginWithGoogle = async () => {
    try{
      logout()
      const responseGoogle = new GoogleAuthProvider();
      return await signInWithPopup(auth, responseGoogle);
    }catch{
      logout()
    }
  };

  const logout = async () => {
    const response = await signOut(auth);
  };
  return (
    <authContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        logout,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
}