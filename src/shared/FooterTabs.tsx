import { useAuth } from "../context/AuthContext";
import {FaHome,FaHistory,FaSignOutAlt} from 'react-icons/fa';

export default function FooterTabs({setIsAuth}) {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    setIsAuth(undefined)
  }


  return(
    <div className="footer">
      <div className="container ">
        <div className="row rounded tabsIcons mx-auto">
          <div className="col-4 my-auto text-start">
            <button className="iconTab"><FaHome/></button>
          </div>
          <div className="col-4 my-auto text-center">
            <button className="iconTab "><FaHistory/></button>
          </div>
          <div className="col-4 my-auto text-end">
            <button className="iconTab" onClick={()=> handleLogout()}><FaSignOutAlt/></button>
          </div>
        </div>
      </div>
    </div>
  )
}