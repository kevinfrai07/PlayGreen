import { FaArrowLeft } from "react-icons/fa";
import "../App.css";
import FooterTabs from "../shared/FooterTabs";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHistory } from "../service/getHistory";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { leaguesInterface } from "../interfaces/leagues";
import HistoryTabs from "../shared/HistoryTabs";
import Loader from "../shared/Loader";
import { styles } from '../styles/styles';


export default function Historial(props:any) {
  const {isDark} = props
  const {Title, ContentCards, IconsHistoryLeft} = styles
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
      <IconsHistoryLeft isDark={isDark} className="mx-1" onClick={(e) => returnHome(e)}>
         <FaArrowLeft/>
      </IconsHistoryLeft>
   </div>
   <div className="container my-3">
      <Title isDark={isDark} className='fw-bold'>History</Title>
      <Title isDark={isDark} className="text-break fs-6"> 
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Placeat, cumque. Id, blanditiis! 
      </Title>
      <ContentCards>
         {Array.isArray(leagues) && leagues.length>0 ? leagues.map((league:any)=>{
               return <HistoryTabs key={league.idLeague} leagues={league} isDark={isDark}></HistoryTabs>
         })
         :
         <Loader/>
         }
      </ContentCards>
   </div>
  <FooterTabs></FooterTabs>
 </div>)
}