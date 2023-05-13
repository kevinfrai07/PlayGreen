import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {FaHome,FaHistory,FaSignOutAlt} from 'react-icons/fa';
import { ReactNode } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

export default function FooterTabs() {
  const navigate = useNavigate()
  const showToastMessage = (type:boolean,text:string) => {
    if(type){
        toast.success(text, {
            position: toast.POSITION.TOP_CENTER
        });
    }else{
        toast.error(text, {
            position: toast.POSITION.TOP_CENTER
        });
    }
  }

  const handleLogout = () => {
    signOut(auth).then(() => {
      showToastMessage(true, "Sesión Cerrada Correctamente")
      navigate("/");
      }).catch((error) => {
        showToastMessage(true, "Error Cerrando Sesión")
      });
  }

  const history = () => {
    navigate("/history");
  }

  const home = () => {
    navigate("/home");
  }


  return(
    <div className="footer">
      <div className="container ">
        <div className="row rounded tabsIcons mx-auto">
          <div className="col-4 my-auto text-start">
            <button className="iconTab" onClick={()=> home()}><FaHome/></button>
          </div>
          <div className="col-4 my-auto text-center">
            <button className="iconTab " onClick={()=> history()}><FaHistory/></button>
          </div>
          <div className="col-4 my-auto text-end">
            <button className="iconTab" onClick={()=> handleLogout()}><FaSignOutAlt/></button>
          </div>
        </div>
      </div>
    </div>
  )
}