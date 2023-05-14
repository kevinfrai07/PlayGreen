import { AuthProvider } from './context/AuthContext'
import { useState } from "react";
import FormularioSesion from "./page/FormularioSesion";
import Home from "./page/Home";
import Historial from "./page/Historial";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import { ToastContainer } from 'react-toastify';
import './styles/styles.scss'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [darkMode, setDarkMode] = useState(false); //False -> Activado && True DesActivado
  const sendData = (data:boolean) => {
    setDarkMode(data)
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<FormularioSesion />} />
          <Route path="/home" element={<Home sendData={sendData}/>} />
          <Route path="/history" element={<Historial/>} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
