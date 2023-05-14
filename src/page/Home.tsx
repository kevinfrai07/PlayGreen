import FooterTabs from "../shared/FooterTabs"
import {FaGratipay,FaTimes, FaMoon, FaSun} from 'react-icons/fa';
import {useEffect, useState,} from 'react'
import { getSearchLeagues } from "../service/listSport";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loader from "../shared/Loader";
import { toast } from "react-toastify";
import { leaguesInterface } from "../interfaces/leagues";
import { styles } from '../styles/styles';

export default function Home(props:any) {
  const {HomeImage, TextImgHome, ContenedorimgPrincipal, ContenedorButton,
  Botonprincipal, ContenedorLike, Close, CloseIcon, Favorite} = styles
  const [darkMode, setDarkMode] = useState(true);
  const [next, setNext] = useState(0);
  const [leagues, setLeagues] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
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

  const sliceText = (data:string) => {
    const resp = data.substring(data.length-14,data.length)
    return resp
  };

  const modoNoche = () =>{
    if(darkMode){
      // showToastMessage(true,"Modo Noche Activado")
      setDarkMode(!darkMode)
    }else{
      // showToastMessage(true,"Modo Noche Desactivado")
      setDarkMode(!darkMode)
    }
    props.sendData(darkMode)
  }

  const isLike = async (islike:boolean) =>{
    try {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          await addDoc(collection(db, "historyLikes"), {
            idLeague: leagues[next]['idLeague'],
            idUser: user.uid,
            strBadge: leagues[next]['strBadge'],
            strLeague: leagues[next]['strLeague'],
            isLike: islike
          });
          showToastMessage(true,"League "+leagues[next]['strLeague']+" agregada" )
          setNext(next+1)
        } else {
           navigate("/");
        }
     });
    } catch (e) {
      showToastMessage(false, "Error Agregando Liga")
    }
    if(next==leagues.length-1){
      setShowButtons(true)
   }else{
    setShowButtons(false)
   }
  }
  useEffect(() => {
      const getLeagues = async () => {
          const data = await getSearchLeagues();
          setLeagues(data.countries);
      };
      getLeagues();
  }, []);

  return (
    <>
    <ContenedorimgPrincipal>
      <ContenedorButton>
        <Botonprincipal isDark={darkMode} onClick={() =>modoNoche()} >{darkMode?<FaMoon/>:<FaSun/>}</Botonprincipal>
      </ContenedorButton>
      {
        Array.isArray(leagues) && next<leagues.length ? leagues.map((league:leaguesInterface,index:number) => {
          if(index === next)
            return(
              <>
                <HomeImage src={league.strBadge}  key={league.idLeague} className="rounded w-100 d-block" alt="" isDark={darkMode}></HomeImage>
                <TextImgHome className="text-center"><span>{sliceText(league.strLeague)}</span></TextImgHome>
              </>
            )
        })
        :<Loader/>
      }
    </ContenedorimgPrincipal>
    <ContenedorLike>
      <div className="row">
        <Close className="col-6 text-end my-auto">
          <CloseIcon isDark={darkMode} disabled={showButtons} onClick={() =>isLike(false)}>
            <FaTimes/>
          </CloseIcon>
        </Close>
        <div className="col-6">
          <Favorite disabled={showButtons} className="favorite" onClick={() =>isLike(true)} isDark={darkMode}>
            <FaGratipay/>
          </Favorite>
        </div>
        {
          showButtons ? <h3 className="text-center">No hay mas imagenes a mostrar</h3> : ""
        }
      </div>
    </ContenedorLike>
     <FooterTabs isDark={darkMode}></FooterTabs>
    </>
  )
}
