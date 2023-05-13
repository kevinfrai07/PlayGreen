import futbol from "../assets/futbol.jpg"
import FooterTabs from "../shared/FooterTabs"
import {FaGratipay,FaTimesCircle,FaMoon} from 'react-icons/fa';
import {useEffect, useState,} from 'react'
import { getSearchLeagues } from "../service/listSport";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loader from "../shared/Loader";
import { toast } from "react-toastify";

export default function Home() {
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

  const modoNoche = () =>{
    showToastMessage(true,"Modo Noche Activado")
    console.log("dio click")
  }

  const isLike = async (islike:boolean) =>{
    try {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
            const docRef = await addDoc(collection(db, "historyLikes"), {
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
    <div className="contenedorimgPrincipal">
      <div className="contenedorButton">
        <button onClick={() =>modoNoche()} className="botonprincipal"><FaMoon/></button>
      </div>
      {
        Array.isArray(leagues) && next<leagues.length ? leagues.map((league:any,index:number) => {
          if(index === next)
            return<img src={league.strBadge}  key={league.idLeague} className="rounded w-100 d-block homeImage" alt=""></img>
        })
        :<Loader/>
      }
    </div>
    <div className="contenedorLike">
      <div className="row my-5">
        <div className="col-6 text-end close my-auto">
          <button disabled={showButtons} className="closeIcon" onClick={() =>isLike(false)}>
            <FaTimesCircle/>
          </button>
        </div>
        <div className="col-6">
          <button disabled={showButtons} className="closeIcon favorite" onClick={() =>isLike(true)}>
            <FaGratipay/>
          </button>
        </div>
        {
          showButtons ? <h3 className="text-center">No hay mas imagenes a mostrar</h3> : ""
        }
      </div>
    </div>
     <FooterTabs></FooterTabs>
    </>
  )
}
