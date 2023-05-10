import React, { useState, useEffect } from "react";
import "../App.css";
import { useAuth } from "../context/AuthContext";
import {FaGoogle} from 'react-icons/fa';
import FormularioSesion from "./FormularioSesion";
import Home from "./Home";

function LoginForm() {
  const auth = useAuth();
  //importar state
  const {displayName} = auth.user
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vistas, setVistas] = useState("prueba");
  const [isAuth, setIsAuth] = useState(undefined);

  //funciones logueo
  // const handleRegister = (e:any) => {
  //   e.preventDefault();
  //   auth.register(emailRegister, passwordRegister);
  // };
  const handleLogin = (e:any) => {
    e.preventDefault();
    auth.login(email, password);
    setIsAuth(auth.user['accessToken'])
  };
  const handleGoogle = (e:any) => {
    e.preventDefault();
    auth.loginWithGoogle();
    setIsAuth(auth.user['accessToken'])
  };

  return (
    <div>
      {isAuth==undefined? (
        <FormularioSesion setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin} handleGoogle={handleGoogle}/>
      ) : (
        <Home isAuth={isAuth} setIsAuth={setIsAuth}></Home>
      )}
    </div>
  );
}

export default LoginForm;