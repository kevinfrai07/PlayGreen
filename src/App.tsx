import LoginForm from "./page/LoginForm"
import { AuthProvider } from './context/AuthContext'

import './App.css'

function App() {
  
  return (
    <>
    <AuthProvider>
      <LoginForm/>
    </AuthProvider>
    </>
    )
  }
  
  export default App
  