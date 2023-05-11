import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {FaHome,FaHistory,FaSignOutAlt} from 'react-icons/fa';

export default function FooterTabs({setIsAuth}) {
  const auth = useAuth();
  const navigate = useNavigate()
  const handleLogout = () => {
    auth.logout();
    setIsAuth(undefined)
  }

  const history = () => {
    auth.logout();
    setIsAuth(undefined)
    navigate("/history");
  }

  const home = () => {
    auth.logout();
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