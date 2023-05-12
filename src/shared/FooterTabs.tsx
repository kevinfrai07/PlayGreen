import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {FaHome,FaHistory,FaSignOutAlt} from 'react-icons/fa';
import { ReactNode } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export default function FooterTabs({setIsAuth} : any) {
  const navigate = useNavigate()
  const handleLogout = () => {
    signOut(auth).then(() => {
          navigate("/");
          console.log("Signed out successfully")
      }).catch((error) => {
        console.log(error)
      });
    setIsAuth(undefined)
  }

  const history = () => {
    setIsAuth(undefined)
    navigate("/history");
  }

  const home = () => {
    setIsAuth(undefined)
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