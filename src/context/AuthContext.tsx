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
import { AuthStateContext } from "../interfaces/authContext";

interface Props {
  children?: ReactNode
  // any props that come into the component
}

/* Creating a context object. */
export const authContext = createContext({} as AuthStateContext);

/**
 * UseAuth() is a function that returns the context object that was created by the useContext() hook.
 */
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("error creating auth context");
  }
  return context;
};

export function AuthProvider({ children } : Props) {
  const [user, setUser] = useState<User|string>("");
  /* A hook that is called when the component is mounted and when the component is updated. */
  useEffect(() => {
    const subscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("no hay usuario suscrito");
        setUser("");
      } else {
        setUser(currentUser);
      }
    });
    return () => subscribed();
  }, []);
  /**
   * "register" is a function that takes two arguments, "email" and "password", and then calls the
   * "createUserWithEmailAndPassword" function with the "auth" object and the "email" and "password"
   * arguments.
   */
  const register = async (email: string, password: string) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response);
  };
  /**
   * "login" is a function that takes two parameters, "email" and "password", and returns a promise that
   * resolves to the result of calling "signInWithEmailAndPassword" with the parameters "auth", "email",
   * and "password".
   */
  const login = async (email: string, password: string) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  };
  /**
   * The loginWithGoogle function is an async function that returns the result of the signInWithPopup
   * function, which takes the auth and responseGoogle parameters.
   *The responseGoogle object is being returned.
   */
  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };
  /**
   * The logout function is an asynchronous function that calls the signOut function and logs the
   * response to the console.
   */
  const logout = async () => {
    const response = await signOut(auth);
    console.log(response);
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