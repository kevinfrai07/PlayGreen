import { AuthProvider } from './context/AuthContext'
import { useState, useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import FormularioSesion from "./page/FormularioSesion";
import Home from "./page/Home";
import Historial from "./page/Historial";

// react router 

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {

  const auth = useAuth();
  //importar state
  const [isAuth, setIsAuth] = useState(undefined);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<FormularioSesion />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/history" element={<Historial/>} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
