import { FaGratipay, FaArrowLeft } from "react-icons/fa";
import "../App.css";
import FooterTabs from "../shared/FooterTabs";
import futbol from "../assets/futbol.jpg"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHistory } from "../service/getHistory";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { leaguesInterface } from "../interfaces/leagues";
import HistoryTabs from "../shared/HistoryTabs";
import Loader from "../shared/Loader";
import { toast } from "react-toastify";


export default function Historial() {
  const [leagues, setLeagues] =  useState<leaguesInterface[]>();
  const navigate = useNavigate()
  
  const returnHome = (e:any) => {
     e.preventDefault();
     navigate("/home");

 };

useEffect(()=>{
   const getLeaguesByUser = async () => {
      onAuthStateChanged(auth, async (user) => {
         if (user) {
            const querySnapshot = await getHistory(user.uid)
            const tasks = querySnapshot.docs.map((doc) => {
              const datos = doc.data()
              return { 
               idLeague: datos.idLeague,
               idUser: datos.idUser,
               strBadge: datos.strBadge,
               strLeague: datos.strLeague,
               isLike: datos.isLike
               }
            });
            setLeagues(tasks)   
         } else {
            navigate("/");
         }
      });
   };
   getLeaguesByUser()
}, [])

  return(
  <div className="Historial">
   <div>
      <button className="iconsHistoryLeft mx-1" onClick={(e) => returnHome(e)}>
         <FaArrowLeft/>
      </button>
   </div>
   <div className="container my-3">
      <h1 className='fw-bold title'>History</h1>
      <p className="text-break"> 
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Placeat, cumque. Id, blanditiis! 
      </p>
      <div className="contentCards">
         {Array.isArray(leagues) && leagues.length>0 ? leagues.map((league:leaguesInterface)=>{
               return <HistoryTabs key={league.idLeague} league={league}></HistoryTabs>
         })
         :
         <Loader/>
         }
      </div>
   </div>
  <FooterTabs></FooterTabs>
 </div>)
}