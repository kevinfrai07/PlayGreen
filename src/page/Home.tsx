import futbol from "../assets/futbol.jpg"
import FooterTabs from "../shared/FooterTabs"
import {FaGratipay,FaTimesCircle,FaSun,FaMoon} from 'react-icons/fa';
import {useEffect, useState,} from 'react'
import { getSearchLeagues } from "../service/listSport";
import {leaguesInterface} from "../interfaces/leagues"
export default function Home(props) {
  const {setIsAuth} = props;
  const [next, setNext] = useState(0);
  const [leagues, setLeagues] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const [leaguesLike, setLeaguesLike] = useState([]);
  const [leaguesDisLike, setLeaguesDisLike] = useState([]);

  const verListas = () =>{
    console.log("dio click")
  }

  const disLike = () =>{
    leaguesDisLike.push(leagues[next])
    setLeaguesDisLike(leaguesDisLike)
    console.log("dislike", leaguesDisLike)
    setNext(next+1)
    if(next==leagues.length-1){
      setShowButtons(true)
   }else{
    setShowButtons(false)
   }
  }

  const Like = () =>{
    leaguesLike.push(leagues[next])
    setLeaguesLike(leaguesLike)
    console.log("Like", leaguesLike)
    setNext(next+1)
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
            console.log(data.countries)
        };
        getLeagues();
    }, []);




  return (
    <>
    <div className="contenedorimgPrincipal">
      <div className="contenedorButton">
        <button onClick={() =>verListas()} className="botonprincipal"><FaMoon/></button>
      </div>
      {
        Array.isArray(leagues) && next<leagues.length ? leagues.map((league:any,index:number) => {
          if(index === next)
            return<img src={league.strBadge}  key={league.idLeague} className="rounded w-100 d-block homeImage" alt=""></img>
        })
        :<img src={futbol} className="rounded w-100 d-block homeImage" alt="No hay más Ligas"></img>
      }
    </div>
    <div className="contenedorLike">
      <div className="row my-5">
        <div className="col-6 text-end close my-auto">
          <button disabled={showButtons} className="closeIcon" onClick={() =>disLike()}>
            <FaTimesCircle/>
          </button>
        </div>
        <div className="col-6">
          <button disabled={showButtons} className="closeIcon favorite" onClick={() =>Like()}>
            <FaGratipay/>
          </button>
        </div>
        {
          showButtons ? <h3 className="text-center">No hay mas imagenes a mostrar</h3> : ""
        }
      </div>
    </div>
     <FooterTabs setIsAuth={setIsAuth}></FooterTabs>
    </>
  )
}
