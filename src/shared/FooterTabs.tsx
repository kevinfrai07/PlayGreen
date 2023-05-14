import { useNavigate } from "react-router-dom";
import {FaHome,FaHistory,FaSignOutAlt} from 'react-icons/fa';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { styles } from '../styles/styles';

export default function FooterTabs(props:any) {
  const {isDark} = props
  const {Footer, TabsIcons, IconTab} = styles
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
      }).catch(() => {
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
    <Footer>
      <div className="container ">
        <TabsIcons isDark={isDark} className="row rounded mx-auto">
          <div className="col-4 my-auto text-start">
            <IconTab onClick={()=> home()}><FaHome/></IconTab>
          </div>
          <div className="col-4 my-auto text-center">
            <IconTab  onClick={()=> history()}><FaHistory/></IconTab>
          </div>
          <div className="col-4 my-auto text-end">
            <IconTab onClick={()=> handleLogout()}><FaSignOutAlt/></IconTab>
          </div>
        </TabsIcons>
      </div>
    </Footer>
  )
}